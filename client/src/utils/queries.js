import { gql } from '@apollo/client'

export const ALL_USERS = gql`
  query ALL_USERS {
    users {
      _id
      username
      email
    }
  }
`

export const USER = gql`
  query USER($_id: ID, $username: String, $email: String) {
    user(username: $username, _id: $_id, email: $email) {
      _id
      username
      email
    }
  }
`

export const CARDS = gql`
  query CARDS($_id: ID, $imageUrl: String, $mtgCardId: String, $name: String, $type: [String], $supertypes: [String], $comments: [Comment]) {
    cards(_id: $_id, imageUrl: $imageUrl, mtgCardId: $mtgCardId, name: $name, type: $type, supertypes: $supertypes, comments: $comments) {
      _id
      imageUrl
      mtgCardId
      name
      type
      set
      supertypes
      comments 
    }
  }
`

export const MTG_CARDS = gql`
  query MTG_CARDS {
    cards {
      imageUrl
      name
      type
      set
      supertypes
    }
  }
`