import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import apolloClient from "../../graphql/apolloClient";
import { GET_REPOSITORIES } from "../../graphql/repositories";
import { setRepositoriesList } from "../slice/repositoriesSlice";

export default function useRepositories() {
  const { repositories } = useAppSelector((state) => state.repositories);
  const dispatch = useAppDispatch();

  const getRepositoriesList = async () => {
    const response = await apolloClient.query({
      query: GET_REPOSITORIES,
    });    
    dispatch(setRepositoriesList(response.data.viewer));
  };
  return { getRepositoriesList, repositories };
}
