import gql from 'graphql-tag';
import { gql as apolloGql } from '@apollo/client';

export const FETCH_POSTS_QUERY = gql`
  {
    posts {
      _id
      description
      picture
      # createdAt
      # username
      # likeCount
      # likes {
      #   username
      # }
      # commentCount
      comments {
        _id
        # username
        # createdAt
        text
      }
    }
  }
`;

export const FETCH_PROFILE =apolloGql`
  query getProfile($profileId:ID!){
    profile(profileId: $profileId) {
      _id
      firstName
      lastName
    }
  }
`;
