import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import apolloClient from "../../graphql/apolloClient";

import { GET_REPOSITORIES } from "../../graphql/repositories";
import {
  setSearchRepositoriesList,
  setPageNumber,
  setRepositoriesList,
  setSearchValue,
} from "../slice/repositoriesSlice";
import { SEARCH_REPOSITORIES } from "../../graphql/searchRepositories";

export default function useRepositories() {
  const { repositories, searchRepo, searchValue, pageNumberRepositories } =
    useAppSelector((state) => state.repositories);

  const dispatch = useAppDispatch();

  const getRepositoriesList = async (quantityRepo: number) => {
    const response = await apolloClient.query({
      query: GET_REPOSITORIES,
      variables: { first: quantityRepo },
    });
    dispatch(setRepositoriesList(response.data.viewer.repositories));
  };

  const getSearchRepositories = async (
    searchValue: string,
    quantityRepo: number
  ) => {
    const response = await apolloClient.query({
      query: SEARCH_REPOSITORIES,
      variables: { query: searchValue, last: quantityRepo },
    });
    dispatch(setSearchRepositoriesList(response.data.search));
    dispatch(setSearchValue(searchValue));
  };

  const getPageNumber = (num: number) => {
    dispatch(setPageNumber(num));
  };
  return {
    repositories,
    searchRepo,
    searchValue,
    pageNumberRepositories,
    getRepositoriesList,
    getSearchRepositories,
    getPageNumber,
  };
}
