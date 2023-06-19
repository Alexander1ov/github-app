import React, { FC } from "react";
import { SetURLSearchParams } from "react-router-dom";

import NumberPaginator from "./NumberPaginator";

import styles from "./Paginator.module.scss";

interface PaginatorProps {
  sumRepo: number;
  searchValue?: string;
  searchParams: URLSearchParams;
  location: string;
  getPageNumber: (num: number) => void;
  setSearchParams: SetURLSearchParams;
  getList?: (quantityRepo: number) => Promise<void>;
}

const Paginator: FC<PaginatorProps> = ({
  sumRepo,
  searchValue,
  searchParams,
  location,
  getPageNumber,
  setSearchParams,
}) => {
  const currentPage = Number(searchParams.get("pageNumber"));
  const sumPage = Math.min(Math.max(Math.ceil(sumRepo / 10), 1), 10);

  const pagination: number[] = [];
  for (let i = 1; i <= sumPage; i++) {
    pagination.push(i);
  }

  const handlePage = (direction: string | number) => {
    if (direction === "left" && currentPage > 1) {
      if (location === "search") {
        setSearchParams(`search=${searchValue}&pageNumber=${currentPage - 1}`);
      } else if (location === "myRepo") {
        setSearchParams(`pageNumber=${currentPage - 1}`);
      }
      getPageNumber(currentPage - 1);
    } else if (direction === "right" && currentPage < sumPage) {
      if (location === "search") {
        setSearchParams(`search=${searchValue}&pageNumber=${currentPage + 1}`);
      } else if (location === "myRepo") {
        setSearchParams(`pageNumber=${currentPage + 1}`);
      }
      getPageNumber(currentPage + 1);
    } else if (typeof direction === "number") {
      if (location === "search") {
        setSearchParams(`search=${searchValue}&pageNumber=${direction}`);
      } else if (location === "myRepo") {
        setSearchParams(`pageNumber=${direction}`);
      }
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
