import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import LaptopImage from "../../assets/laptop.png";
import styles from "./CorporateProfile.module.css";

const data = [
  {
    id: 1,
    description: "Give a Make Over To Corporate Profile",
  },
  {
    id: 2,
    description: "Screen and video capture software enables users",
  },
  {
    id: 3,
    description: "Choose High Corporate Profile to create your",
  },
];

const CorporateProfile = () => {
  return (
    <div className={styles["corporate-profile-container"]}>
      <h1 className={styles["corporate-profile-title"]}>Corportate Profile</h1>
      <div className={styles["corporate-profile-details"]}>
        <div className={styles["corporate-profile-items"]}>
          {data.map((item) => (
            <div key={item.id} className={styles["corporate-profile-item"]}>
              <HiArrowSmallRight />
              <p className={styles["description"]}>{item.description}</p>
            </div>
          ))}
        </div>
        <div className={styles["corporate-profile-image-container"]}>
          <img
            src={LaptopImage}
            alt=""
            className={styles["corporate-profile-image"]}
          />
        </div>
      </div>
    </div>
  );
};

export default CorporateProfile;
