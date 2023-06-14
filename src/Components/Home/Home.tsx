import React, { FC } from "react";
import { ROUTES } from "../../constants/routes";

import useRepositories from "../../redux/actions/repositoriesActions";
import useUser from "../../redux/actions/userActions ";

import MyButtonLink from "../UI/MyButtonLink/MyButtonLink";
import MyButtonOut from "../UI/MyButtonOut/MyButtonOut";

import AVATAR from "../../img/avatar.png";
import styles from "./Home.module.scss";

const Home: FC = () => {
  const { user } = useUser();
  const { pageNumberRepositories } = useRepositories();
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <div className={styles.img}>
            {user?.avatarUrl ? (
              <img src={user?.avatarUrl} alt="avatar" />
            ) : (
              <img src={AVATAR} alt="avatar" />
            )}
          </div>
          <div className={styles.personalInfo}>
            {user?.login ? <h4>{user?.login}</h4> : <h4>Login</h4>}
            {user?.name ? <p>{user?.name}</p> : <p>Name</p>}
          </div>

          <MyButtonOut className={styles.btn} text="- Exit - Change token" />
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
        url={`${ROUTES.REPOSITORIES}?pageNumber=${pageNumberRepositories}`}
      />
    </section>
  );
};

export default Home;
