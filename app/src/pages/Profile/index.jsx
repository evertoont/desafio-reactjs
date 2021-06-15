import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import styles from "./profile.module.scss";
import CardRepo from "../../components/Card";
import SideBar from "../../components/SideBar";
import ResponsiveMenu from "../../components/ResponsiveMenu";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { getUserData } from "../../services/UserService";
import { getStartUser } from "../../services/StartService";
import { getUserRepository } from "../../services/RepositoryService";

export default function Profile() {
  const { username } = useParams();
  const [dataProfile, setDataProfile] = useState([]);
  const [dataRepository, setDataRepository] = useState([]);
  const [errorRepository, setErrorRepository] = useState("");
  const { width } = useWindowDimensions();

  useEffect(() => {
    async function handleUserData() {
      const userData = await getUserData(username);
      const amountStar = await getStartUser(username);

      setDataProfile({ ...userData, amountStar });
    }
    handleUserData();
  }, [username]);

  useEffect(() => {
    async function handleRepository() {
      try {
        const userRepository = await getUserRepository(username);

        setDataRepository(userRepository);
      } catch (error) {
        setErrorRepository(error.message);
      }
    }
    handleRepository();
  }, [username]);

  return (
    <div className={styles.container}>
      {width <= 415 ? (
        <ResponsiveMenu {...dataProfile} />
      ) : (
        <SideBar {...dataProfile} />
      )}

      <div className={styles.repository}>
        {errorRepository ? (
          <p className={styles.errorRepository}>{errorRepository}</p>
        ) : (
          dataRepository.map((data) => <CardRepo key={data.id} data={data} />)
        )}
      </div>
    </div>
  );
}
