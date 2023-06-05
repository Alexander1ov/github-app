import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import LOGO from "../../img/logo2.png";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span>Developed by </span>
        <Link
          to="https://github.com/Alexander1ov"
          target="_blank"
          rel="noreferrer"
        >
          Alexander_1ov
        </Link>
      </div>
      <div>
        <span>The original website: </span>
        <Link to="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </Link>
      </div>
      <div className={styles.logo}>
        <span>© GitHubApp - 2023</span>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo2" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
