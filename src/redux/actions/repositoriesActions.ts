import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import apolloClient from "../../graphql/apolloClient";

import { GET_REPOSITORIES } from "../../graphql/repositories";
import { setPageNumber, setRepositoriesList } from "../slice/repositoriesSlice";

export default function useRepositories() {
  const { repositories, pageNumberRepositories } = useAppSelector(
    (state) => state.repositories
  );
  const dispatch = useAppDispatch();

  const getRepositoriesList = async (quantityRepo: number) => {
    const response = await apolloClient.query({
      query: GET_REPOSITORIES,
      variables: { last: quantityRepo },
    });

    dispatch(setRepositoriesList(response.data.viewer.repositories));
  };
  const getPageNumber = (num: number) => {
    dispatch(setPageNumber(num));
  };
  return {
    getRepositoriesList,
    getPageNumber,
    repositories,
    pageNumberRepositories,
  };
}
