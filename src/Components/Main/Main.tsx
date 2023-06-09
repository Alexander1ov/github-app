import React, { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { ROUTES } from "../../constants/routes";
import useRepositories from "../../redux/actions/repositoriesActions";
import { GET_REPOSITORIES } from "../../graphql/repositories";

import Home from "../Home/Home";

import Repositories from "../Repositories/Repositories";
import DetailsRepository from "../DetailsRepository/DetailsRepository";
import BubbleAnimation from "../BubbleAnimation/BubbleAnimation";

import styles from "./Main.module.scss";

const Main: FC = () => {
  // const { loading, error } = useQuery(GET_REPOSITORIES);
  const { getRepositoriesList, repositories } = useRepositories();

  // console.log(repositoriesList);

  useEffect(() => {
    getRepositoriesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className={styles.main}>
      <BubbleAnimation />

      {/* {error?  (<h2>Произошла ошибка</h2>):(
        loading? (<h2>Загрузка...</h2>):(
          <Routes>
          <Route path={ROUTES.HOME} element={<Home />}></Route>
          <Route path={ROUTES.REPOSITORIES} element={<Repositories />}></Route>
          <Route path={ROUTES.REPOSITORY} element={<DetailsRepository />}></Route>
          </Routes>
          )
        )} */}

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}></Route>
        <Route path={ROUTES.REPOSITORIES} element={<Repositories />}></Route>
        <Route path={ROUTES.REPOSITORY} element={<DetailsRepository />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
