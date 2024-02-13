import React from "react";
import CandidateJobs from "./CandidateJobs";
import JobSearches from "./JobSearches";
import UserGuide from "./UserGuide";
import CorporateProfile from "./CorporateProfile";
import InterviewCalls from "./InterviewCalls";

function JobDetails() {
  return (
    <div>
      <CandidateJobs />
      <InterviewCalls />
      <JobSearches />
      <CorporateProfile />
      <UserGuide />
    </div>
  );
}

export default JobDetails;
