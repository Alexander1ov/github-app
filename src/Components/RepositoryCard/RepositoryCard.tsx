import React, { FC } from "react";
import { Link } from "react-router-dom";

import { calcDateCreation } from "../../constants/const";

import GIT from "../../img/git.png";
import styles from "./RepositoryCard.module.scss";

interface RepositoryCardProps {
  id: string;
  number: number;
  title: string;
  url: string;
  createdAt: string;
  pushedAt: string;
  ownerName: string;
  ownerAvatar: string;
}

const RepositoryCard: FC<RepositoryCardProps> = ({
  id,
  number,
  title,
  url,
  createdAt,
  pushedAt,
  ownerName,
  ownerAvatar,
}) => {
  return (
    <Link to={`/repository/${id}`} className={styles.card}>
      <div className={styles.number}>{number}</div>
      <h3>{title}</h3>
      <p>Last commit date: {calcDateCreation(pushedAt)}</p>
      <div className={styles.info}>
        <div className={styles.author}>
          <div>
            <img src={ownerAvatar} alt="" />
          </div>
          <p>{ownerName}</p>
        </div>
        <img src={GIT} alt="" />
      </div>
      <div className={styles.img}></div>
      <div className={styles.footer}>
        <p> {url}</p>
        <p>Date of creation: {calcDateCreation(createdAt)}</p>
      </div>
    </Link>
  );
};

export default RepositoryCard;
