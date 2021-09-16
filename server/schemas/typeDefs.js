const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
  _id: ID
  name: String
  } 

  type Product {
  _id: ID
  name: String
  description: String
  image: String
  availability: String
  price: String
  category: Category
  }

  type Order {
  _id: ID
  purchaseDate: String
  products: [Product]
  orders: [Order]
  stock: [Stock]
  }

  type Stock {
  _id: ID
  products: [Product]
  }

  type Profile {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Checkout {
  session: ID
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
    categories: [Category]
    products(category: ID, name: String): [Product]
    allproducts: [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    tock(_id: ID!): Stock
    profiles: [Profile]
    profile(profileId: ID!): Profile
    posts: [Post]
    post(postId: ID!): Post
  }
  type Mutation {
    addProfile(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(picture: String, description: String!): Post
    addComment(text: String, postId: ID!): Post
    addProduct(name: String!, description: String!, image:String!, price:String!, quantity:String!,category: String!):Product
    addStock(products: [ID]!): Stock
    addCategory(name: String!): Category
    updateProduct(_id: ID!, quantity: Int!): Product
    updateQuantityProduct(_id: ID!, quantity: Int!): Product
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updatePost(_id: ID!, picture: String, description: String): Post
    deletePost(_id: ID!): Post
  }
`;

module.exports = typeDefs;
