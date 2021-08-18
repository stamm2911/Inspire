const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
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
    addProfile(firstName: String!, lastName: String!, email: String!, password: String!): Profile
    login(email: String!, password: String!): Auth
    addPost(picture: String, description: String!): Post
    addComment(text: String, postId: ID!): Post
    updatePost(_id: ID!, picture: String, description: String): Post
    deletePost(_id: ID!): Post
  }
`;

module.exports = typeDefs;
