import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./MyNavLink.module.scss";

interface MyNavLinkProps {
  route: string;
  text: string;
}

const MyNavLink: FC<MyNavLinkProps> = ({ route, text }) => {
  return (
    <div className={styles.navLink}>
      <NavLink
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
        to={route}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default MyNavLink;
