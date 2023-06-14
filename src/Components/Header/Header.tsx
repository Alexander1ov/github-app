import React, { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useRepositories from "../../redux/actions/repositoriesActions";

import { ROUTES } from "../../constants/routes";
import MyNavLink from "../UI/MyNavLink/MyNavLink";
import MyInputHeader from "../UI/MyInputHeader/MyInputHeader";
import MyButtonOut from "../UI/MyButtonOut/MyButtonOut";

import LOGO from "../../img/logo.png";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const { pageNumberRepositories } = useRepositories();
  const [searchValue, setSearchValue] = useState("");
  const { pathname } = useLocation();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
          <span>GitHubApp</span>
        </Link>
      </div>

      {pathname === "/" && (
        <MyInputHeader searchValue={searchValue} handleSearch={handleSearch} />
      )}

      <nav className={styles.nav}>
        <MyNavLink route={ROUTES.HOME} text="Home" />
        <MyNavLink
          route={`${ROUTES.REPOSITORIES}?pageNumber=${pageNumberRepositories}`}
          text="Repositories"
        />
        <MyNavLink route="https://github.com/" text="Original GitHub" />
        <MyButtonOut className={styles.btn} text="Exit" />
      </nav>
    </header>
  );
};

export default Header;
