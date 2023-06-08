import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query AllRepositories {
    viewer {
      name
      login
      avatarUrl
      repositories(first: 100) {
        edges {
          node {
            name
            id
            createdAt
            description
            forkCount
            isMirror
            commitComments(last: 1) {
              totalCount
              nodes {
                id
                body
              }
            }
          }
        }
      }
    }
  }
`;
