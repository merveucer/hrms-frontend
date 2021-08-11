import React from "react";
import Headline from './Headline';
import { Container } from "semantic-ui-react";

export default function EmployerLayout() {
  return (
    <div>
      <Container className="content">
        <Headline content="Employers" />
      </Container>
    </div>
  );
}
