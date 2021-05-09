import React, { useState } from "react";
import { useHistory } from "react-router";
import { BsSearch } from "react-icons/bs";
import styles from "./home.module.scss";

import api from "../../services/api";

export default function Home() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [erroMessage, setErroMessage] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    api
      .get(`users/${username}`)
      .then(() => {
        history.push(`/profile/${username}`);
      })
      .catch(() => {
        setErroMessage("User not found!");
      });
  }

  return (
    <section className={styles.content}>
      <h1>Search Devs</h1>
      <form>
        <input
          type="text"
          placeholder="Type the username here..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          autofocus="true"
        />
        <button onClick={handleSearch}>
          <BsSearch className={styles.icon} /> Buscar
        </button>
      </form>
      {erroMessage && (
        <span className={styles.errorMessage}>{erroMessage}</span>
      )}
    </section>
  );
}
