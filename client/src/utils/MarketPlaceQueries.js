import { gql } from '@apollo/client';

export const QUERY_MARKETPOSTS = gql`
  query allMarketPosts {
    marketPosts {
      _id
      price
      productName
      productDesc
      available
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

