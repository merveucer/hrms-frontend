import React from "react";
import { Container, Segment, Header } from "semantic-ui-react";

export default function Headline({ content }) {
  return (
    <div>
      <Container className="headline">
        <Segment basic>
          <Header color="violet" as="h4" textAlign="right">
            <span className="headline-2">{content}</span>
          </Header>
        </Segment>
        <Segment basic size="tiny" color="yellow" />
      </Container>
    </div>
  );
}
