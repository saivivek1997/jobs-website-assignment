import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Layout from "../Layout/Layout";
import IndividulaDetails from "../components/IndividualDetails";
import JobDetails from "../components/jobs-details/JobDetails";
import LeftContainerDetails from "../components/LeftContainerDetails";

function HomePage() {
  return (
    <div>
      <Header />
      <Search />
      <Layout>
        <LeftContainerDetails />
        <JobDetails />
      </Layout>
    </div>
  );
}

export default HomePage;
