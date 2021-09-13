import React from "react";
import { useParams } from "react-router";
import Headline from "./Headline";
import JobPostingList from "../pages/JobPostingList";
import { Container } from "semantic-ui-react";

export default function FavoriteJobPostingLayout() {

  let { id } = useParams();

  return (
    <div>
      <Container className="content">
        <Headline content=" Favorite Job Postings" />

        <JobPostingList type="favorites" itemsPerRow="3" id={id} />
      </Container>
    </div>
  );
}
