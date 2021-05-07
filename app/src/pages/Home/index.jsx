import React, { useState } from "react";
import { useHistory } from "react-router";
import { BsSearch } from "react-icons/bs";
import styles from "./home.module.scss";

export default function Home() {
  const history = useHistory();
  const [username, setUsername] = useState();

  function handleSearch() {
    history.push(`/profile/${username}`);
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
        />
        <button onClick={handleSearch}>
          <BsSearch className={styles.icon} /> Buscar
        </button>
      </form>
    </section>
  );
}
