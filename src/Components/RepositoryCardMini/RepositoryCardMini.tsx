import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./RepositoryCardMini.module.scss";

interface RepositoryCardMiniProps {
  id: string;
  ownerAvatar: string;
  title: string;
  click: React.Dispatch<React.SetStateAction<string>>;
}

const RepositoryCardMini: FC<RepositoryCardMiniProps> = ({
  id,
  ownerAvatar,
  title,
  click,
}) => {
  return (
    <Link
      to={`/repository/${id}`}
      className={styles.item}
      onClick={() => click("")}
    >
      <div className={styles.image}>
        <img src={ownerAvatar} alt="" />
      </div>
      <div className={styles.title}>{title}</div>
    </Link>
  );
};

export default RepositoryCardMini;
