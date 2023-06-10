import React, { FC } from "react";
import { Link } from "react-router-dom";

import GIT from "../../img/git.png";
import styles from "./RepositoryCard.module.scss";

interface RepositoryCardProps {
  title: string;
  url: string;
  createdAt: string;
}

const RepositoryCard: FC<RepositoryCardProps> = ({ title, url, createdAt }) => {
  const dateCreation = createdAt.slice(0, 10).split("-").reverse().join(".");

  return (
    <section className={styles.card}>
      <h3>{title}</h3>
      <div className={styles.img}>
        <img src={GIT} alt="" />
      </div>
      <div className={styles.info}>
        <Link to={url} target="_blank" rel="noreferrer">
          Link to GitHub repository
        </Link>

        <p></p>
        <p>Date of creation: {dateCreation}</p>
      </div>
    </section>
  );
};

export default RepositoryCard;
