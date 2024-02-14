import React from "react";
import HeaderImage from "../assets/headerimage.png";
import { MdNotificationsNone } from "react-icons/md";
import UserIcon from "../assets/user.png";
import styles from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import useScreenSize from "../hooks/useScreenSize";

function Header() {
  const screenSize = useScreenSize();
  return (
    <header className={styles.header}>
      <img src={HeaderImage} alt="header-image" className={styles.logo} />
      {screenSize.width <= 950 ? (
        <GiHamburgerMenu fontSize="24px" />
      ) : (
        <div className={styles["menu-container"]}>
          <ul className={styles.menu}>
            <li className={styles["menu-item"]}>
              <a href="#">Dashboard</a>
            </li>
            <li className={styles["menu-item"]}>
              <a href="#">Job Postings</a>
            </li>
            <li className={styles["menu-item"]}>
              <a href="#">Al Search</a>
            </li>
            <li className={styles["menu-item"]}>
              <a href="#">Account Management</a>
            </li>
          </ul>
          <div className={styles["user-icon-container"]}>
            <MdNotificationsNone className={styles["notification-icon"]} />
            <img src={UserIcon} alt="user-icon" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
