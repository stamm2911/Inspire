const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: Profile
  }

  type Comment {
    _id: ID
    text: String
  }

  type Post {
    _id: ID
    picture: String
    description: String
    comments: [Comment]
  }

  type Query {
    profiles: [Profile]
    profile(profileId: ID!): Profile
    posts: [Post]
    post(postId: ID!): Post
  }

  type Mutation {
    addProfile(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(picture: String, description: String!, comments: ID): Post
    addComment(comments: [ID]!): Post
    updatePost(_id: ID!, picture: String, description: String): Post
    deletePost(_id: ID!): Post
  }
`;

module.exports = typeDefs;
