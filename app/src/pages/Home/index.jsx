import React, { useState } from "react";
import { useHistory } from "react-router";
import { BsSearch } from "react-icons/bs";
import styles from "./home.module.scss";

import { getUserData } from "../../services/UserService";

export default function Home() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [erroMessage, setErroMessage] = useState("");

  async function handleSearch() {
    try {
      const { login } = await getUserData(username);

      if (username === "" || login === "error")
        throw Error;

      history.push(`/profile/${username}`);
    } catch (error) {
      setErroMessage("User not found!");
    }
  }

  return (
    <section className={styles.content}>
      <h1>Search Devs</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          placeholder="Type the username here..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          autofocus="true"
        />
        <button>
          <BsSearch className={styles.icon} /> Buscar
        </button>
      </form>
      {erroMessage && (
        <span className={styles.errorMessage}>{erroMessage}</span>
      )}
    </section>
  );
}
