import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import useRepositories from "../../redux/actions/repositoriesActions";

import MyNavLink from "../UI/MyNavLink/MyNavLink";
import MyInputHeader from "../UI/MyInputHeader/MyInputHeader";
import MyButtonOut from "../UI/MyButtonOut/MyButtonOut";

import LOGO from "../../img/logo.png";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const { pageNumberRepositories } = useRepositories();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
          <span>GitHubApp</span>
        </Link>
      </div>
      <MyInputHeader />
      <nav className={styles.nav}>
        <MyNavLink route={ROUTES.HOME} text="Home" />
        <MyNavLink
          route={`${ROUTES.REPOSITORIES}?pageNumber=${pageNumberRepositories}`}
          text="My repositories"
        />
        <MyNavLink route="https://github.com/" text="Original GitHub" />
        <MyButtonOut className={styles.btn} text="Exit" />
      </nav>
    </header>
  );
};

export default Header;
