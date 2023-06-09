import React, { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";

import RepositoryCard from "../RepositoryCard/RepositoryCard";

import styles from "./Repositories.module.scss";
const Repositories: FC = () => {
  const { repositories } = useAppSelector((state) => state.repositories);
  const nodes = repositories?.repositories.nodes;

  return (
    <section className={styles.section}>
      <h2>Repositories page</h2>
      <div className={styles.wrapper}>
        <div className={styles.options}>
          <input type="text" />
          <div className={styles.info}>
            <p>
              Total number of repositories:{" "}
              {repositories?.repositories.totalCount}
            </p>
            <p>Total disk usage: {repositories?.repositories.totalDiskUsage}</p>
          </div>
        </div>
        {nodes && (
          <div className={styles.content}>
            {nodes.map((repo) => (
              <RepositoryCard
                key={repo.id}
                title={repo.name}
                url={repo.url}
                createdAt={repo.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Repositories;
