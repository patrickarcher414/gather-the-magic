const { gql } = require('apollo-server-express');


//fixed error under type Query by changing users: [Users] to [User]

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  } 

  type Card {
    _id: ID
    imageUrl:  String
    cardId: String
    name: String
    type: String
    supertypes: String
    legalities: String
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
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(_id: ID, email: String, password: String, username: String): User
    deleteUser(_id: ID): User
  }
`;

module.exports = typeDefs;
