import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import apolloClient from "../../graphql/apolloClient";

import {
  CURRENT_REPOSITORY,
  QUICK_SEARCH,
  SEARCH_REPOSITORIES,
} from "../../graphql/searchRepositories";
import {
  setSearchRepositoriesList,
  setSearchValue,
  setPageNumberSearch,
  toggleRestart,
  addCalls,
} from "../slice/searchSlice";

export default function useSearch() {
  const { searchRepo, searchValue, pageNumberSearch, restart, numCalls } =
    useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const getSearchRepositories = async (
    searchValue: string,
    quantityRepo: number,
    withoutReboot: boolean
  ) => {
    const response = await apolloClient.query({
      query: SEARCH_REPOSITORIES,
      variables: { query: searchValue, last: quantityRepo },
    });
    dispatch(setSearchRepositoriesList(response.data.search));
    dispatch(setSearchValue(searchValue));
    dispatch(toggleRestart(withoutReboot));
    dispatch(addCalls());
  };

  const getQuickSearch = async (searchValue: string) => {
    const response = await apolloClient.query({
      query: QUICK_SEARCH,
      variables: { query: searchValue, first: 10 },
    });
    dispatch(setSearchRepositoriesList(response.data.search));
  };

  const getOneRepo = async (repo: string) => {
    const response = await apolloClient.query({
      query: CURRENT_REPOSITORY,
      variables: { id: repo },
    });
    console.log(response.data);

    dispatch(setSearchRepositoriesList(response.data.search));
  };

  const getPageNumberSearch = (num: number) => {
    dispatch(setPageNumberSearch(num));
  };
  return {
    getSearchRepositories,
    getQuickSearch,
    getOneRepo,
    getPageNumberSearch,
    searchRepo,
    searchValue,
    pageNumberSearch,
    restart,
    numCalls,
  };
}
