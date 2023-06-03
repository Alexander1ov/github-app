import React, { FC } from "react";

import LOGO from "../../img/logo2.png"
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="" />
        </Link>
      </div>
      <div>
        The original website:{" "}
        <Link to="https://news.ycombinator.com/">Hacker News</Link>
      </div>
      <div className={styles.rights}>
        Developed by{" "}
        <a href="https://vk.com/alexander_1ov" target="_blank" rel="noreferrer">
          Alexander_1ov
        </a>
      </div>
    </footer>
  );
};

export default Footer;
