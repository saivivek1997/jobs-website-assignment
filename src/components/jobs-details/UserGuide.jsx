import React, { useEffect, useState } from "react";
import styles from "./UserGuide.module.css";
import Career1Image from "../../assets/career1.png";
import Career2Image from "../../assets/career2.png";
import Career3Image from "../../assets/career3.png";
import Career4Image from "../../assets/career4.png";
import Career5Image from "../../assets/career5.png";

import { FaArrowRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import useScreenSize from "../../hooks/useScreenSize";

const userGuideData = [
  {
    id: 1,
    image: Career1Image,
    title: "Resume Highlighter",
    description: "Grab the cttention of employers",
    bgColor: "#fefcf6",
  },
  {
    id: 2,
    image: Career2Image,
    title: "Carrer Up Skills",
    description: "Get the power of two in one and speed up your job search",
    bgColor: "#fff",
  },
  {
    id: 3,
    image: Career1Image,
    title: "Create Cv",
    description: "Professionally written resume + cover letter",
    bgColor: "#f9fbf9",
  },
  {
    id: 4,
    image: Career4Image,
    title: "Coursera",
    description: "Better your chances of getting shortisted",
    bgColor: "#fff",
  },
  {
    id: 5,
    image: Career5Image,
    title: "Learning Point",
    description: "Grab the cttention of employers",
  },
];

const UserGuide = () => {
  const [slicedNumber, setSlicedNumber] = useState(0);
  const screenSize = useScreenSize();

  function assignSliceNumber() {
    let count = 0;
    let { width } = screenSize;
    if (width >= 1300) count = 5;
    if (width <= 1299) count = 4;
    if (width <= 1200) count = 3;
    if (width <= 1054) count = 2;
    if (width <= 950) count = 1;
    setSlicedNumber(count);
  }
  useEffect(() => {
    assignSliceNumber();
  }, [screenSize]);

  return (
    <div className={styles["user-guide-container"]}>
      <h2 className={styles.title}>
        User Guide To Use the Application Scenarios
      </h2>
      <div className={styles["scenario-cards-container"]}>
        <div className={styles["left-arrow"]}>
          {" "}
          <FaChevronCircleLeft />{" "}
        </div>
        {userGuideData
          .slice(0, slicedNumber)
          .map(({ id, image, title, description, bgColor }) => (
            <div
              className={styles["scenario-card"]}
              style={{ backgroundColor: bgColor }}
              key={id}
            >
              <img src={image} alt="" className={styles["scenario-image"]} />
              <div className={styles["scenario-details-container"]}>
                <p className={styles["scenario-title"]}>{title}</p>
                <p className={styles["scenario-description"]}>{description}</p>
              </div>
              <div className={styles["read-more-container"]}>
                <FaArrowRight />
                <div className={styles["read-more-text"]}>Read More</div>
              </div>
            </div>
          ))}
        <div className={styles["right-arrow"]}>
          {" "}
          <FaChevronCircleRight />{" "}
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
