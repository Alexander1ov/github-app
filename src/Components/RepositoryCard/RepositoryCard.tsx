import React, { FC } from "react";

import styles from "./RepositoryCard.module.scss";

interface RepositoryCardProps {
  title: string;
  url: string;
  createdAt: string;
}

const RepositoryCard: FC<RepositoryCardProps> = ({ title, url, createdAt }) => {
  return (
    <section className={styles.card}>
      <div className={styles.info}>
        <p>{title}</p>
        <p>{url}</p>
        <p>{createdAt}</p>
      </div>
    </section>
  );
};

export default RepositoryCard;
