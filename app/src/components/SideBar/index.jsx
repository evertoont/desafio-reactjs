import React from "react";
import { useHistory } from "react-router";
import styles from "./style.module.scss";
import { AiOutlineMail, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FiTwitter, FiLink } from "react-icons/fi";
import {
  HiOutlineUserGroup,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

export default function SideBar() {
  const history = useHistory();

  return (
    <div className={styles.sideBar}>
      <div className={styles.user_image}>
        <img
          src="https://avatars.githubusercontent.com/u/55769021?v=4"
          alt="avatar user"
        />
      </div>
      <div className={styles.content_description}>
        <h1>Everton Oliver</h1>
        <h2><a href="https://github.com/evertoont">@evertoont</a></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu,
          feugiat.
        </p>
        <div className={styles.user_status}>
          <span>
            <HiOutlineUserGroup /> 10 Followers
          </span>
          <span>
            <AiOutlineHeart /> 10 Following
          </span>
          <span>
            <AiOutlineStar /> 10 Stars
          </span>
        </div>
        <div className={styles.user_info}>
          <ul>
            <li>
              <HiOutlineOfficeBuilding /> Organization
            </li>
            <li>
              <HiOutlineLocationMarker /> Location
            </li>
            <li>
              <AiOutlineMail /> Email
            </li>
            <li>
              <FiLink />
              <a href="http://www.meusite.com" target="_blank" rel="noopener noreferrer">
                www.meusite.com
              </a>
            </li>
            <li>
              <FiTwitter />
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                @twitter
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.go_back}>
          <button onClick={() => history.push("/")}>Voltar</button>
        </div>
      </div>
    </div>
  );
}
