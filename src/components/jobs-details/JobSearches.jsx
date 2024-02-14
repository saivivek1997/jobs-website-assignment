import React from "react";
import JobSearchCard from "./JobSearchCard";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import styles from "./JobSearches.module.css";

const jobSearchesData = [
  {
    id: 1,
    cardTitle: "Saved Searches",
    jobsData: [
      {
        id: 1,
        title: "Wordpress Integrator with 2+ Years",
        icon: Icon2,
        location: "Hyderabad",
      },
      {
        id: 2,
        title: "Sr. Web Designer With Adobe Suite",
        icon: Icon1,
        location: "Mumbai",
      },
    ],
  },
  {
    id: 2,
    cardTitle: "Recent Searches",
    jobsData: [
      {
        id: 1,
        title: "React Js Developer With Node Js / Javascript",
        location: "Chennai",
        icon: Icon1,
      },
      {
        id: 2,
        title: "Business Anylist Programmer With 2 Years Exp",
        location: "Chennai",
        icon: Icon2,
      },
    ],
  },
];

function JobSearches() {
  return (
    <div className={styles.container}>
      {jobSearchesData.map((jobSearch) => (
        <JobSearchCard
          key={jobSearch.id}
          cardTitle={jobSearch.cardTitle}
          jobsData={jobSearch.jobsData}
        />
      ))}
    </div>
  );
}

export default JobSearches;
