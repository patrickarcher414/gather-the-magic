const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  } 

  type Card {
    _id: ID
    imageUrl:  String
    mtgCardId: String
    name: String
    type: String
    set: String
    supertypes: [String]
    comments: [Comment]
  }

  type Comment {
    _id: ID
    writtenBy: String
    commentBody: String
  }

  type Auth {
    token: String!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID, username: String, email: String): User
    card: Card
    cards: [Card]
    comment: Comment
    comments: [Comment]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(_id: ID!, email: String, password: String, username: String): User
    deleteUser(_id: ID!): User
    addCard(mtgCardId: String!): Card
    addComment(writtenBy: ID!, commentBody: String!, mtgCardId: String!): Comment
  }
`;

module.exports = typeDefs;
