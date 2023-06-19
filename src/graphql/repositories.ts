import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query AllRepositories($first: Int) {
    viewer {
      repositories(first: $first) {
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
