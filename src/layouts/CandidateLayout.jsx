import React from "react";
import Headline from "./Headline";
import { Container } from "semantic-ui-react";

export default function CandidateLayout() {
  return (
    <div>
      <Container className="content">
        <Headline content="Candidates" />
      </Container>
    </div>
  );
}
