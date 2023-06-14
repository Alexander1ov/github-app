import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query AllRepositories($last: Int) {
    viewer {
      repositories(last: $last) {
        totalCount
        totalDiskUsage
        nodes {
          id
          name
          url
          openGraphImageUrl
          createdAt
          pushedAt
          owner {
            id
            login
            url
            avatarUrl
          }
        }
      }
    }
  }
`;
