import gql from 'graphql-tag';

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
