import React from "react";
import Headline from "./Headline";
import { Container } from "semantic-ui-react";

export default function JobPostingLayout() {
  return (
    <div>
      <Container className="content">
        <Headline content="Job Postings" />
      </Container>
    </div>
  );
}
