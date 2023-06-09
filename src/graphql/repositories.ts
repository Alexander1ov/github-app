import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query AllRepositories {
    viewer {
      name
      login
      avatarUrl
      createdAt
        repositories(last: 10) {
          totalCount
          totalDiskUsage
          nodes {
            id
            url
            name
            createdAt
            commitComments(last: 10) {
              nodes {
                id
              }
            }
          }
        }
      }
  }
`;
