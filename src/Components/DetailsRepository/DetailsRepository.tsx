import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { calcDateCreation } from "../../constants/const";
import { CURRENT_REPOSITORY } from "../../graphql/searchRepositories";
import useRepositories from "../../redux/actions/repositoriesActions";
import useSearch from "../../redux/actions/searchActions";

import MyButtonLink from "../UI/MyButtonLink/MyButtonLink";

import styles from "./DetailsRepository.module.scss";

const DetailsRepository: FC = () => {
  const { id } = useParams();
  const { repositories } = useRepositories();
  const { searchRepo } = useSearch();

  const { loading, data, error } = useQuery(CURRENT_REPOSITORY, {
    variables: { id },
  });

  let repo = repositories?.nodes.find((repo) => id === repo.id);
  if (!repo) {
    repo = searchRepo?.nodes.find((repo) => id === repo.id);
  }
  if (!repo && !loading && !error) {
    repo = data.node;
  }

  if (!repo) return <></>;
  return (
    <section className={styles.section}>
      <h2>{repo.name}</h2>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={repo.openGraphImageUrl} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.text}>
            <h3>Name: {repo.name} </h3>
            <h4>Owner: {repo.owner.login} </h4>{" "}
            <p>
              Date of creation: {calcDateCreation(repo.createdAt)}
              <br />
              Last commit date: {calcDateCreation(repo.pushedAt)}
            </p>
            <p></p>
          </div>
          <div className={styles.linkGitHub}>
            <MyButtonLink
              className={styles.link}
              text="Link to owner profile"
              url={repo.owner.url}
            />
            <MyButtonLink
              className={styles.link}
              text="Link to github repository"
              url={repo.url}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsRepository;
