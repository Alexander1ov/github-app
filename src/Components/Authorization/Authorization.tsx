import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Authorization.module.scss";
import useUser from "../../redux/actions/userActions ";

const Authorization: FC = () => {
  const [token, setToken] = useState("");
  const { isAuth, addEntrance, getUserData } = useUser();

  const handleEntry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sessionStorage.setItem("token", token);
    addEntrance();
    getUserData();

    // window.location.reload();
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      console.log(3);
      
      addEntrance();
      getUserData();
    }
  }, [isAuth]);

  return (
    <section className={styles.entrance}>
      <div className={styles.box}>
        <h2>Sign in to GitHubApp</h2>
        <p>
          To pass the authorization procedure, enter your token <br />
          <Link
            to="https://github.com/settings/tokens"
            rel="noreferrer"
            target="_blank"
          >
            {` github.com `}
          </Link>
          (Personal access token GitHub)
        </p>
        <form onSubmit={handleEntry}>
          <input
            required
            type="text"
            placeholder="Personal access token GitHub"
            value={token}
            onChange={(e) => {
              setToken(e.target.value);
            }}
          />
          <button>Sign in</button>
        </form>
      </div>
    </section>
  );
};

export default Authorization;
