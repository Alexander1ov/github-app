import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { RepositoriesSearch } from "../../redux/types/searchTypes";
import useSearch from "../../redux/actions/searchActions";

import RepositoryCard from "../RepositoryCard/RepositoryCard";
import Paginator from "../UI/Paginator/Paginator";

import styles from "./PageSearch.module.scss";
import { SEARCH_REPOSITORIES } from "../../graphql/searchRepositories";
import { useQuery } from "@apollo/client";

const PageSearch: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    searchRepo,
    searchValue,
    pageNumberSearch,
    numCalls,
    restart,
    getPageNumberSearch,
    getSearchRepositories,
  } = useSearch();
  const nodes = searchRepo?.nodes;

  let listRepo: RepositoriesSearch[] | undefined;
  if (nodes) {
    listRepo = [...nodes].slice(
      (pageNumberSearch - 1) * 10,
      (pageNumberSearch - 1) * 10 + 10
    );
  }

  useEffect(() => {
    setSearchParams(`search=${searchValue}&pageNumber=${pageNumberSearch}`);
  }, [numCalls]);

  useEffect(() => {
    if (restart) {
      getPageNumberSearch(Number(searchParams.get("pageNumber")) || 1);
      getSearchRepositories(searchParams.get("search") || "", 100, false);
    }
  }, []);
  return (
    <section className={styles.section}>
      <h2>Search result: {searchValue}</h2>
      <div className={styles.info}>
        <p>Number of repositories found: {searchRepo?.repositoryCount}</p>
      </div>
      {searchRepo && listRepo && (
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
            sumRepo={searchRepo.repositoryCount}
            getPageNumber={getPageNumberSearch}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            searchValue={searchValue}
            location="search"
          />
        </>
      )}
    </section>
  );
};

export default PageSearch;
