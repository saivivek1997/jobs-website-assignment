import React from "react";
import GoogleImage from "../assets/google.png";
import Card from "./Card";
import Button from "./ui/Button";
import ScoreImage from "../assets/score.png";
import styles from "./IndividualDetails.module.css";
import AdDetails from "./AdDetails";

function IndividulaDetails() {
  const cards = [
    {
      id: 1,
      number: 32,
      title: "Job Hits",
    },
    {
      id: 2,
      number: 18,
      title: "Shortlisted",
    },
  ];
  return (
    <>
      <div className={styles["profile-container"]}>
        <img
          src={GoogleImage}
          alt="google-image"
          className={styles["profile-image"]}
        />
        <div className={styles["user-info"]}>
          <h3 className={styles["user-name"]}>James cameron</h3>
          <p className={styles["user-designation"]}>
            Business Process Associate
          </p>
          <p className={styles["user-company"]}>Google Inc</p>
        </div>
        <div className={styles.card}>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
        <div className="button-center">
          <Button bgColor="#406882">Improve Your Profile</Button>
        </div>
        <img
          src={ScoreImage}
          alt="score-image"
          className={styles["score-image"]}
        />
        <div className={styles["rating-container"]}>
          <div className={styles.star}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>*</div>
            ))}
          </div>
          <div className={styles["rating-value"]}>4.5 Rating</div>
        </div>
        <div className={styles["last-visted"]}>Last Visited : 14 Hours ago</div>
      </div>
    </>
  );
}

export default IndividulaDetails;
