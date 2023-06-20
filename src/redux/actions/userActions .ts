import apolloClient from "../../graphql/apolloClient";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { GET_USER } from "../../graphql/user";
import { setUserData, setEntrance } from "../slice/userSlice";

export default function useUser() {
  const { user, isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getUserData = async () => {
    const response = await apolloClient.query({
      query: GET_USER,
    });
    dispatch(setUserData(response.data.viewer));
  };
  const addEntrance = () => {
    dispatch(setEntrance());
  };

  return { user, isAuth, getUserData, addEntrance };
}
