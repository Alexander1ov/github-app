import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import useRepositories from "../../redux/actions/repositoriesActions";
import { RepositoriesNodes } from "../../redux/types/repositoriesTypes";

import RepositoryCard from "../RepositoryCard/RepositoryCard";
import Paginator from "../UI/Paginator/Paginator";

import styles from "./Repositories.module.scss";

const Repositories: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    repositories,
    pageNumberRepositories,
    getRepositoriesList,
    getPageNumber,
  } = useRepositories();

  useEffect(() => {
    getPageNumber(Number(searchParams.get("pageNumber")));
  }, []);

  const nodes = repositories?.nodes;

  let listRepo: RepositoriesNodes[] | undefined;
  if (nodes) {
    listRepo = [...nodes]
      .reverse()
      .slice(
        (pageNumberRepositories - 1) * 10,
        (pageNumberRepositories - 1) * 10 + 10
      );
  }

  return (
    <section className={styles.section}>
      <h2>Repositories page</h2>
      <div className={styles.info}>
        <p>Total number of repositories: {repositories?.totalCount}</p>
        <p>Total disk usage: {repositories?.totalDiskUsage}</p>
      </div>
      {repositories && listRepo && (
        <>
          <div className={styles.content}>
            {listRepo.map((repo, index) => (
              <RepositoryCard
                key={repo.id}
                id={repo.id}
                number={index + 1}
                title={repo.name}
                url={repo.url}
                createdAt={repo.createdAt}
                pushedAt={repo.pushedAt}
                ownerName={repo.owner.login}
                ownerAvatar={repo.owner.avatarUrl}
              />
            ))}
          </div>
          <Paginator
            sumRepo={repositories.totalCount}
            getPageNumber={getPageNumber}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            getList={getRepositoriesList}
            location="myRepo"
          />
        </>
      )}
    </section>
  );
};

export default Repositories;
