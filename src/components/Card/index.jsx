import React from "react";
import { HiOutlineStar } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import styles from "./style.module.scss";
import moment from 'moment'

export default function CardRepo({data}) {

  const descriptionDefault = "No description"

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
        <span>{moment(data.updated_at).fromNow()}</span>
      </div>
      <hr/>
    </div>
  );
}
