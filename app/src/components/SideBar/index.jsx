import React from "react";
import { useHistory } from "react-router";
import { AiOutlineMail, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FiTwitter, FiLink } from "react-icons/fi";
import {
  HiOutlineUserGroup,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";
import styles from "./style.module.scss";
import notfound from "../../assets/user_notfound.png";

export default function SideBar(data) {
  const history = useHistory();

  console.log(data);

  return (
    <div className={styles.sideBar}>
      <div className={styles.user_image}>
        <img src={data.avatar_url || notfound} alt="avatar user" />
      </div>
      <div className={styles.content_description}>
        <h1>{data.name}</h1>
        <h2>
          <a
            href={`https://github.com/${data.login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{data.login}
          </a>
        </h2>
        <p>{data.bio}</p>
        <div className={styles.user_status}>
          <span>
            <HiOutlineUserGroup /> {data.followers} Followers
          </span>
          <span>
            <AiOutlineHeart /> {data.following} Following
          </span>
          <span>
            <AiOutlineStar /> {data.amountStar} {data.amountStar >= 30 ? "+ Stars" : "Stars"}
          </span>
        </div>
        <div className={styles.user_info}>
          <ul>
            {data.company && (
              <li>
                <HiOutlineOfficeBuilding /> {data.company}
              </li>
            )}

            {data.location && (
              <li>
                <HiOutlineLocationMarker /> {data.location}
              </li>
            )}
            {data.email && (
              <li>
                <AiOutlineMail /> {data.email}
              </li>
            )}
            {data.blog && (
              <li>
                <FiLink />
                <a href={data.blog} target="_blank" rel="noopener noreferrer">
                  {data.blog}
                </a>
              </li>
            )}
            {data.twitter_username && (
              <li>
                <FiTwitter />
                <a
                  href={`https://twitter.com/${data.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{data.twitter_username}
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className={styles.go_back}>
          <button onClick={() => history.push("/")}>Voltar</button>
        </div>
      </div>
    </div>
  );
}
