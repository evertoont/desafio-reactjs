import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./profile.module.scss";
import CardRepo from "../../components/Card";
import SideBar from "../../components/SideBar";
import ResponsiveMenu from "../../components/ResponsiveMenu";
import useWindowDimensions from '../../hooks/useWindowDimensions';

import api from "../../services/api";

export default function Profile() {
  const { username } = useParams();
  const [dataProfile, setDataProfile] = useState([]);
  const [dataRepository, setDataRepository] = useState([]);
  const [amountStar, setAmountStar] = useState(0);
  const [errorRepository, setErrorRepository] = useState("");
  const { width } = useWindowDimensions();

  function starOrdenation(fristPosition, secondPosition) {
    if (fristPosition.stargazers_count < secondPosition.stargazers_count)
      return -1;

    if (fristPosition.stargazers_count > secondPosition.stargazers_count)
      return 1;
  }

  useEffect(() => {
    api.get(`/users/${username}/starred`).then((data) => {
      const star = data.data.length;
      setAmountStar(star);
    });

    api.get(`/users/${username}`).then(({ data }) => {
      const userData = {
        id: data.id,
        login: data.login,
        avatar_url: data.avatar_url,
        bio: data.bio,
        name: data.name,
        company: data.company,
        blog: data.blog,
        location: data.location,
        email: data.email,
        followers: data.followers,
        following: data.following,
        twitter_username: data.twitter_username,
        public_repos: data.public_repos,
      };
      setDataProfile(userData);
    });

    api.get(`/users/${username}/repos`).then(({ data }) => {
      if (data.length > 0) {
        const dataCards = [];
        data.forEach((repos) => {
          dataCards.push({
            id: repos.id,
            html_url: repos.html_url,
            description: repos.description,
            name: repos.name,
            updated_at: repos.updated_at,
            stargazers_count: repos.stargazers_count,
          });
        });

        setDataRepository([...dataCards].sort(starOrdenation).reverse());
      } else {
        setErrorRepository("User has no public repository.");
      }
    });
  }, [username]);

  const newDataProfile = Object.assign(dataProfile, { amountStar });

  return (
    <div className={styles.container}>
      {width<=415 ? <ResponsiveMenu {...newDataProfile} /> : <SideBar {...newDataProfile} />}

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
