import React, { FC, ReactNode, useEffect } from "react";
import useUser from "../../redux/actions/userActions ";
import useRepositories from "../../redux/actions/repositoriesActions";

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
  const { isAuth, addEntrance, getUserData } = useUser();
  const { getRepositoriesList } = useRepositories();
  
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      addEntrance();
      getUserData();
      getRepositoriesList(100);
    }
  }, [isAuth]);

  return <>{children}</>;
};

export default AuthWrapper;
