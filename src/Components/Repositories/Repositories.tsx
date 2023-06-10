import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";

import { RepositoriesNodes } from "../../redux/types/repositoriesTypes";
import RepositoryCard from "../RepositoryCard/RepositoryCard";

import styles from "./Repositories.module.scss";

const Repositories: FC = () => {
  const { repositories } = useAppSelector((state) => state.repositories);
  const nodes = repositories?.repositories.nodes;
  let listRepo: RepositoriesNodes[] | undefined;
  if (nodes) {
    listRepo = [...nodes].reverse();
  }

  return (
    <section className={styles.section}>
      <h2>Repositories page</h2>
      <div className={styles.info}>
        <p>
          Total number of repositories: {repositories?.repositories.totalCount}
        </p>
        <p>Total disk usage: {repositories?.repositories.totalDiskUsage}</p>
      </div>
      {listRepo && (
        <div className={styles.content}>
          {listRepo.map((repo) => (
            <RepositoryCard
              key={repo.id}
              title={repo.name}
              url={repo.url}
              createdAt={repo.createdAt}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Repositories;
