import React from "react";
import styles from "./AdDetails.module.css";
import AdImage from "../assets/ad1.png";
import Button from "./ui/Button";

function AdDetails() {
  return (
    <div className={styles["ad-details-container"]}>
      <p className={styles["ad-button"]}>Elevate Your Work</p>
      <p className={styles.advice}>LEARN.GROW</p>
      <p className={styles.advice}>.SUCCED</p>
      <p className={styles.talent}>Bring your ideas</p>
      <p className={styles.talent}>Discover your potential</p>
      <img src={AdImage} />
      <p className={styles.diversity}>Diversity Drive @</p>
      <p className={styles["company-name"]}>Cognizant</p>
      <Button bgColor="#00b13f">Apply Now</Button>
    </div>
  );
}

export default AdDetails;
