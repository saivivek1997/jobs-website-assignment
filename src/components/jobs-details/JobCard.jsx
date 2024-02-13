import React from "react";
import styles from "./JobCard.module.css";

const JobCard = ({ icon, title, location, skills, posted }) => {
  return (
    <div className={styles["job-card"]}>
      <img src={icon} className={styles["job-image"]} />
      <div className={styles["job-details"]}>
        <p className={styles["job-title"]}>{title}</p>
        <p className={styles["job-location"]}> Location :{location}</p>
        <p className={styles["job-skills"]}>Skills :{skills.join(", ")}</p>
      </div>
      <p className={styles["posted-info"]}>Posted : {posted}</p>
    </div>
  );
};

export default JobCard;
