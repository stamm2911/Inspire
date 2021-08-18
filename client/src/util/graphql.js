import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
  {
    posts {
      _id
      description
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
