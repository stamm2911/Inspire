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


