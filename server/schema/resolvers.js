const { User } = require('../models')
const { signToken } = require('../utils/auth')
const { AuthenticationError } = require('apollo-server-express')

const resolvers = {
  Query: {
    users: async (parent, args, context, info) => {
      return await User.find()
    },
    user: async (parent, args, context, info) => {
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
      const token = signToken({ _id: user._id, email: user.email, username: user.username })
      return {
        token,
        user
      }
    },
    addUser: async (parent, args, context, info) => {
      return await User.create(args)
    },
    updateUser: async (parent, args, context, info) => {
      return await User.findByIdAndUpdate(args._id, args, { new: true })
    },
    deleteUser: async (parent, args, context, info) => {
      return await User.findByIdAndDelete(args._id)
    },
  }
}

module.exports = resolvers