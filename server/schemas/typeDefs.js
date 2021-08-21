const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    availability: Boolean
    image: String
  }
  type Checkout {
    session: ID
  }
  type Cart {
    _id: ID
    total: Float
    products: [Product]
  }
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
    products(name: String): [Product]
    product(_id: ID!): Product
    cart(_id: ID!): Cart
    checkout(products: [ID]!): Checkout
    profiles: [Profile]
    profile(profileId: ID!): Profile
    posts: [Post]
    post(postId: ID!): Post
  }
  type Mutation {
    addCart(products: [ID]!): Cart
    updateProduct(_id: ID!, price: Float!): Product
    addProfile(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(picture: String, description: String!): Post
    addComment(text: String, postId: ID!): Post
    updatePost(_id: ID!, picture: String, description: String): Post
    deletePost(_id: ID!): Post
  }
`;

module.exports = typeDefs;
