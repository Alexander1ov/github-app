import apolloClient from "../../graphql/apolloClient";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { GET_USER } from "../../graphql/user";
import { setUserData } from "../slice/userSlice";

export default function useUser() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getUserData = async () => {
    const response = await apolloClient.query({
      query: GET_USER,
    });
    dispatch(setUserData(response.data.viewer));
  };

  return { getUserData, user };
}
