import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import useRepositories from "../../redux/actions/repositoriesActions";
import { GET_REPOSITORIES } from "../../graphql/repositories";

const Repositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);
  const { getRepositoriesList, repositoriesList } = useRepositories();

  console.log(data);
  

  useEffect(() => {
    getRepositoriesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {error && <h2>Произошла ошибка</h2>}
      {loading && <h2>Загрузка...</h2>}
      <section>
        <h1>Рабочая страница</h1>
      </section>
    </div>
  );
};

export default Repositories;
