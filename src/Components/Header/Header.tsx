import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import MyNavLink from "../UI/MyNavLink/MyNavLink";

import LOGO from "../../img/logo.png";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
          <span>GitHubApp</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <MyNavLink route={ROUTES.HOME} text="Home" />
        <MyNavLink route={ROUTES.REPOSITORIES} text="Repositories" />
        <MyNavLink route="https://github.com/" text="Original GitHub" />
      </nav>
    </header>
  );
};

export default Header;
