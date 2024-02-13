import React from "react";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import JobCard from "./JobCard";
import styles from "./CandidateJobs.module.css";
import SearchIcon from "../../assets/search.png";

const jobsDetails = [
  {
    id: 1,
    icon: Icon1,
    title: "Sr. Java Developer with MySQL Database",
    location: "Mumbai",
    skills: ["Html", "javascript", "Bootstrap", "React Js", "Node js"],
    posted: "3 Days ago",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Angular Developer With Magento DB",
    location: "Mumbai",
    skills: ["Html", "javascript", "Bootstrap", "React Js", "Node js"],
    posted: "3 Days ago",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Jr. UI Developer With Adobe Creative suit",
    location: "Mumbai",
    skills: ["Html", "javascript", "Bootstrap", "React Js"],
    posted: "3 Days ago",
  },
];
function CandidateJobs() {
  return (
    <div className={styles["candidate-jobs-container"]}>
      <h2 className={styles.title}>Your Jobs and Recent Applicants</h2>
      <div className={styles["jobs-and-posting-container"]}>
        <div className={styles["jobs-details"]}>
          {jobsDetails.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
        <div className={styles["jobs-posting"]}>
          <img
            src={SearchIcon}
            className={styles["search-icon"]}
            alt="search-icon"
          />
          <p className={styles.description}>
            This Job Posting Has No Applications Through
          </p>
          <p className={styles.anotherdesc}>Lorem Ipsum Content</p>
        </div>
      </div>
    </div>
  );
}

export default CandidateJobs;
