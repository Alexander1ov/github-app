import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { ROUTES } from "../../constants/routes";
import { GET_USER } from "../../graphql/user";

import BubbleAnimation from "../BubbleAnimation/BubbleAnimation";
import PageSearch from "../PageSearch/PageSearch";
import Home from "../Home/Home";
import Repositories from "../Repositories/Repositories";
import DetailsRepository from "../DetailsRepository/DetailsRepository";

import styles from "./Main.module.scss";

const Main: FC = () => {
  const { loading, error } = useQuery(GET_USER);

  return (
    <main className={styles.main}>
      <BubbleAnimation />
      {error ? (
        <h2 className={styles.error}>Произошла ошибка</h2>
      ) : loading ? (
        <h2 className={styles.loading}>Загрузка...</h2>
      ) : (
        <Routes>
          <Route path={ROUTES.SEARCH} element={<PageSearch />}></Route>
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
