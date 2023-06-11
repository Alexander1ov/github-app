import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./MyButtonLink.module.scss";

interface MyButtonLinkProps {
  className: string;
  url: string;
  text: string;
}

const MyButtonLink: FC<MyButtonLinkProps> = ({ className, url, text }) => {
  return (
    <div className={`${styles.link} ${className}`}>
      <Link to={url}>{text} </Link>
    </div>
  );
};

export default MyButtonLink;
