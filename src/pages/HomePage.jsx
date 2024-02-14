import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Layout from "../Layout/Layout";
import JobDetails from "../components/jobs-details/JobDetails";
import LeftContainerDetails from "../components/LeftContainerDetails";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Search />
      <Layout>
        <LeftContainerDetails />
        <JobDetails />
      </Layout>
      <Footer />
    </div>
  );
}

export default HomePage;
