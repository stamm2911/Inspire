const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    availability: Boolean
    image: String
  }
  
  type Cart {
    _id: ID
    total: Float
    products: [Product]
  }

  type User {
    _id: ID
    name: String
    email: String
    cart: [Cart]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    products(name: String): [Product]
    product(_id: ID!): Product
    profile: Profile
    cart(_id: ID!): Cart
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    addCart(products: [ID]!): Cart
    updateUser(name: String, email: String, password: String): User
    updateProduct(_id: ID!, price: Float!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
