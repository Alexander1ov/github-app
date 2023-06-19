import { gql } from "@apollo/client";

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!, $last: Int) {
    search(type: REPOSITORY, query: $query, last: $last) {
      repositoryCount
      nodes {
        ... on Repository {
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

export const QUICK_SEARCH = gql`
  query QuickSearch($query: String!, $first: Int) {
    search(type: REPOSITORY, query: $query, first: $first) {
      repositoryCount
      nodes {
        ... on Repository {
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

export const CURRENT_REPOSITORY = gql`
  query CurrentRepository($id: ID!) {
    node(id: $id) {
      ... on Repository {
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
`;
