import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addProfile(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addProfile(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation addPost($picture: String, $description: String!) {
    addPost(picture: $picture, description: $description) {
      _id
      description
      comments {
        _id
        text
      }
    }
  }
`;
