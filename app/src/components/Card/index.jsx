import React from "react";
import { HiOutlineStar } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import styles from "./style.module.scss";

export default function CardRepo({data}) {

  const descriptionDefault = "No description, website, or topics provided"

  return (
    <div className={styles.container}>
      <a href={data.html_url} target="_blank" rel="noopener noreferrer">
        <h2>{data.name}</h2>
      </a>
      <p>
        {data.description ?? descriptionDefault}
      </p>
      <div className={styles.info_repo}>
        <span>
          <HiOutlineStar /> {data.stargazers_count} stars
        </span>
        <span>
          <BsDot />
        </span>
        <span>{data.updated_at}</span>
      </div>
      <hr/>
    </div>
  );
}
