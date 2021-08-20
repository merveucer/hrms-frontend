import React from "react";
import { Grid, Image, Divider, Segment, Header, Input } from "semantic-ui-react";

export default function HighlightedContent() {
  return (
    <Grid>
      <Grid.Row stretched columns="2">
        <Grid.Column>
          <Image src="https://res.cloudinary.com/merveucer/image/upload/v1629119569/resumes_qjfqgp.svg" />
        </Grid.Column>
        <Grid.Column>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Segment basic>
            <Header color="violet" textAlign="right">
              <span className="headline-1">Find a new</span>
            </Header>
            <br />
            <Header color="pink" textAlign="right">
              <span className="headline-2">Job</span>
            </Header>
          </Segment>
          <Segment raised circular>
            <Input transparent type="text" icon="search" size="big" placeholder="Search . . ." />
          </Segment>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
