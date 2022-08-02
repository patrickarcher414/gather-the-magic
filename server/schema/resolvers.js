const { User, Card, Comment } = require('../models')
const { signToken } = require('../utils/auth')
const { AuthenticationError } = require('apollo-server-express')
const mtg = require('mtgsdk')
const { mtgGetAllCards } = require('../utils/helpers')


const resolvers = {
  Query: {
    users: async (parent, args, context, info) => {
      return await User.find()
    },
    user: async (parent, args, context, info) => {
      if (!args._id && !args.email && !args.username) {
        throw new AuthenticationError('Please search by id, email, or username.')
      }
      const where = {}
      if (args._id) {
        where._id = args._id
      }
      if (args.username) {
        where.username = args.username
      }
      if (args.email) {
        where.email = args.email
      }
      return await User.findOne(where)
    },

    // START CAMERON'S WORK

    // https://docs.magicthegathering.io/#api_v1cards_list

    //  savedCards
    card: async (parent, args, context, info) => {
      return await Card.findOne().populate("comments")
      // mtg.card.find(386616)
      //   .then(result => {
      //     console.log(result.card.name)
      //   })
    },

    // mtgCards
    cards: async (parent, args, context, info) => {

      const cards = await mtg.card.where({ supertypes: 'legendary', type: 'creature' })
      console.log(cards)
      return cards
    },

    // END CAMERON'S WORK 

  },
  Mutation: {
    login: async (parent, args, context, info) => {
      const user = await User.findOne({ username: args.username })
      if (!user) {
        throw new AuthenticationError('No user found with that username.')
      }
      const isCorrectPW = await user.isCorrectPassword(args.password)
      if (!isCorrectPW) {
        throw new AuthenticationError('Please use correct password.')
      }
      const token = signToken(user)
      return {
        token,
        user
      }
    },
    addUser: async (parent, args, context, info) => {
      const newUser = await User.create(args)
      const token = signToken(newUser)
      return {
        user: newUser,
        token,
      }
    },
    updateUser: async (parent, args, context, info) => {
      return await User.findByIdAndUpdate(args._id, args, { new: true })
    },
    deleteUser: async (parent, args, context, info) => {
      return await User.findByIdAndDelete(args._id)
    },
    addCard: async (parent, args, context, info) => {
      const mtgResult = await mtg.card.find(args.mtgCardId)
      return await Card.create({ ...args, ...mtgResult.card })
    },
    addComment: async (parent, args, context, info) => {
      const newComment = await Comment.create(args)
      await Card.findOneAndUpdate({ mtgCardId: args.mtgCardId }, { $addToSet: { comments: newComment._id } })
      return newComment
    },
  }
}

module.exports = resolvers