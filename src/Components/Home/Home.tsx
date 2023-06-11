import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";

import { ROUTES } from "../../constants/routes";

import AVATAR from "../../img/avatar.png";
import styles from "./Home.module.scss";
import MyButtonLink from "../UI/MyButtonLink/MyButtonLink";

const Home: FC = () => {
  const { repositories } = useAppSelector((state) => state.repositories);
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <div className={styles.img}>
            {repositories?.avatarUrl ? (
              <img src={repositories?.avatarUrl} alt="avatar" />
            ) : (
              <img src={AVATAR} alt="avatar" />
            )}
          </div>
          <div className={styles.personalInfo}>
            {repositories?.login ? (
              <h4>{repositories?.login}</h4>
            ) : (
              <h4>Login</h4>
            )}
            {repositories?.name ? <p>{repositories?.name}</p> : <p>Name</p>}
          </div>
        </div>
        <div className={styles.info}>
          <h3> Welcome to website.</h3>
          <p>
            This service works using the GitHub GraphQL API. <br />
            The technology stack is Vite, TypeScript, React.js, Redux-Toolkit,
            SCSS, GraphQL.
          </p>
        </div>
      </div>
      <MyButtonLink
        className={styles.link}
        text="Repositories page"
        url={ROUTES.REPOSITORIES}
      />
    </section>
  );
};

export default Home;
