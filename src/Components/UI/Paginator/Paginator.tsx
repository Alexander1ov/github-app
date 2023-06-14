import React, { useEffect, FC } from "react";
import { useSearchParams } from "react-router-dom";

import NumberPaginator from "./NumberPaginator";

import styles from "./Paginator.module.scss";
import useRepositories from "../../../redux/actions/repositoriesActions";

interface PaginatorProps {
  sumRepo: number;
  getPageNumber: (num: number) => void;
}

const Paginator: FC<PaginatorProps> = ({ sumRepo, getPageNumber }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("pageNumber"));
  const sumPage = Math.max(Math.ceil(sumRepo / 10), 1);

  const { getRepositoriesList, repositories } = useRepositories();

  useEffect(() => {
    if (searchParams.get("pageNumber")) {
      getRepositoriesList(currentPage * 10);
    }
  }, [currentPage]);

  const pagination: number[] = [];
  for (let i = 1; i <= sumPage; i++) {
    pagination.push(i);
  }

  const handlePage = (direction: string | number) => {
    if (direction === "left" && currentPage > 1) {
      setSearchParams(`pageNumber=${currentPage - 1}`);
      getPageNumber(currentPage - 1);
    } else if (direction === "right" && currentPage < sumPage) {
      setSearchParams(`pageNumber=${currentPage + 1}`);
      getPageNumber(currentPage + 1);
    } else if (typeof direction === "number") {
      setSearchParams(`pageNumber=${direction}`);
      getPageNumber(direction);
    }
  };

  return (
    <div className={styles.arrow}>
      <div
        className={styles.left}
        onClick={() => {
          handlePage("left");
        }}
      />
      {pagination.map((elem) => (
        <NumberPaginator
          key={elem}
          active={elem === currentPage}
          elem={elem}
          handlePage={handlePage}
        />
      ))}
      <div
        className={styles.right}
        onClick={() => {
          handlePage("right");
        }}
      />
    </div>
  );
};

export default Paginator;
