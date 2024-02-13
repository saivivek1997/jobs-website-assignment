import React from "react";
import Icon1 from "../../assets/icon1.png";
import styles from "./JobSearchCard.module.css";

function JobSearchCard({ cardTitle, jobsData }) {
  return (
    <div className={styles["job-search-card"]}>
      <div className={styles["saved-searches"]}>
        <p className={styles["saved-searches-title"]}>{cardTitle}</p>
        <p className={styles["view-all"]}>view All</p>
      </div>
      {jobsData.map(({ icon, title, location, id }) => (
        <div className={styles["job-search-details"]} key={id}>
          <img
            src={icon}
            className={styles["job-search-image"]}
            alt="Job Search Icon"
          />
          <div className={styles["job-search-info"]}>
            <p className={styles["job-title"]}>{title}</p>
            <p className={styles["job-location"]}>Location :{location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobSearchCard;
