import React, { FC } from "react";

import styles from "./MyInputHeader.module.scss";

interface MyInputHeaderProps {
  searchValue: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInputHeader: FC<MyInputHeaderProps> = ({
  searchValue,
  handleSearch,
}) => {
  return (
    <form className={styles.form}>
      <div className={styles.icon}>
        <img src="./icon/icon-search.png" alt="" />
      </div>
      <div className={styles.input}>
        <input
          type="search"
          name="search"
          placeholder="Search for repositories..."
          autoComplete="off"
          onChange={handleSearch}
          value={searchValue}
        />
      </div>
    </form>
  );
};

export default MyInputHeader;
