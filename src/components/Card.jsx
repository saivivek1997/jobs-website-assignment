import React from "react";
import styles from "./Card.module.css";

function Card({ number, title }) {
  return (
    <div className={styles["card-container"]}>
      <p className={styles.number}>{number}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;
