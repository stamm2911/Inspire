import { gql } from '@apollo/client';

export const QUERY_MARKETPOSTS = gql`
  query allMarketPosts {
    products {
      _id
      name
      description
      price
      availability
      image
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

