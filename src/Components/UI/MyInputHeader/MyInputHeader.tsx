import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../../constants/routes";
import useSearch from "../../../redux/actions/searchActions";

import RepositoryCardMini from "../../RepositoryCardMini/RepositoryCardMini";

import SEARCH from "../../../img/icon-search.png";
import styles from "./MyInputHeader.module.scss";

const MyInputHeader: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const {
    searchRepo,
    getSearchRepositories,
    getPageNumberSearch,
    getQuickSearch,
  } = useSearch();
  const navigate = useNavigate();
  const nodes = searchRepo?.nodes;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
    getQuickSearch(e.currentTarget.value);
  };

  const getSearchRepo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getPageNumberSearch(1);
    getSearchRepositories(searchValue, 100, false);
    setSearchValue("");
    navigate(ROUTES.SEARCH);
  };

  return (
    <form className={styles.form} onSubmit={getSearchRepo}>
      <div className={styles.icon}>
        <img src={SEARCH} alt="" />
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
      {searchValue && (
        <div className={styles.box}>
          {nodes &&
            nodes.map((repo) => (
              <RepositoryCardMini
                key={repo.id}
                id={repo.id}
                ownerAvatar={repo.owner.avatarUrl}
                title={repo.name}
                click={setSearchValue}
              />
            ))}
        </div>
      )}
    </form>
  );
};

export default MyInputHeader;
