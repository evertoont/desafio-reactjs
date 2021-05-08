import React from "react";
import { HiOutlineStar } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import styles from "./style.module.scss";

export default function CardRepo() {
  return (
    <div className={styles.container}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <h2>Repository Name</h2>
      </a>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
        congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu,
        feugiat.
      </p>
      <div className={styles.info_repo}>
        <span>
          <HiOutlineStar /> 100 stars
        </span>
        <span>
          <BsDot />
        </span>
        <span>Update 30 days</span>
      </div>
      <hr/>
    </div>
  );
}
