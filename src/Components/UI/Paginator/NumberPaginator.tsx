import React, { FC } from "react";

import styles from "./NumberPaginator.module.scss";

interface NumberPaginatorProps {
  elem: number;
  active: boolean;
  handlePage: (direction: string | number) => void;
}

const NumberPaginator: FC<NumberPaginatorProps> = ({
  elem,
  active,
  handlePage,
}) => {
  return (
    <div
      key={elem}
      className={`${styles.pagination}  ${active && styles.active} `}
      onClick={() => {
        handlePage(elem);
      }}
    >
      {elem}
    </div>
  );
};

export default NumberPaginator;
