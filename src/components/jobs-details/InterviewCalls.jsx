import React from "react";
import InterviewImage from "../../assets/interview.png";
import styles from "./InterviewCalls.module.css";

function InterviewCalls() {
  return (
    <div className={styles["interview-calls-container"]}>
      <img
        src={InterviewImage}
        alt="interview-image"
        className={styles["interview-image"]}
      />
      <div className={styles["interview-details"]}>
        <p className={styles["interview-question"]}>
          What it feels like a have 48% more interview calls?
        </p>
        <p className={styles["interview-benefit"]}>
          To get 5x more recruiter views on your profile
        </p>
      </div>
      <div className={styles["ask-button"]}>Ask here</div>
    </div>
  );
}

export default InterviewCalls;
