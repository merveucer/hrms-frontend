import React from "react";
import Headline from "./Headline";
import EmployerList from "../pages/EmployerList";
import { Container } from "semantic-ui-react";

export default function EmployerLayout() {
  return (
    <div>
      <Container className="content">
        <Headline content="Employers" />
        
        <EmployerList />
      </Container>
    </div>
  );
}
