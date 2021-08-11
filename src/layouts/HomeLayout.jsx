import React from "react";
import HighlightedContent from "./HighlightedContent";
import JobPostingListRecently from "../pages/JobPostingListRecently";
import ViewAllJobPostingsByPostingDate from './ViewAllJobPostingsByPostingDate';

export default function HomeLayout() {
  return (
    <div>
      <HighlightedContent />
      <JobPostingListRecently />
      <ViewAllJobPostingsByPostingDate />
    </div>
  );
}
