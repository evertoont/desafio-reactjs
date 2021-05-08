import React from "react";
import styles from "./profile.module.scss";
import CardRepo from "../../components/Card";
import SideBar from "../../components/SideBar";

export default function Profile() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.repository}>
        <CardRepo />
        <CardRepo />
        <CardRepo />
        <CardRepo />
        <CardRepo />
        <CardRepo />
        <CardRepo />
        <CardRepo />
        <CardRepo />
        <CardRepo />
        <CardRepo />
        <CardRepo />
      </div>
    </div>
  );
}
