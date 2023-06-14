import React, { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_USER } from "../../graphql/user";
import useRepositories from "../../redux/actions/repositoriesActions";
import useUser from "../../redux/actions/userActions ";
import { ROUTES } from "../../constants/routes";

import Home from "../Home/Home";
import Repositories from "../Repositories/Repositories";
import DetailsRepository from "../DetailsRepository/DetailsRepository";
import BubbleAnimation from "../BubbleAnimation/BubbleAnimation";

import styles from "./Main.module.scss";

const Main: FC = () => {
  const { loading, error } = useQuery(GET_USER);
  const { getUserData } = useUser();
  const { getRepositoriesList } = useRepositories();

  useEffect(() => {
    getUserData();
    getRepositoriesList(10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className={styles.main}>
      <BubbleAnimation />
      {error ? (
        <h2>Произошла ошибка</h2>
      ) : loading ? (
        <h2>Загрузка...</h2>
      ) : (
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />}></Route>
          <Route path={ROUTES.REPOSITORIES} element={<Repositories />}></Route>
          <Route
            path={ROUTES.REPOSITORY}
            element={<DetailsRepository />}
          ></Route>
        </Routes>
      )}
    </main>
  );
};

export default Main;
