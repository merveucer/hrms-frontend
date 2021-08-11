import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Grid, Reveal, Image, Button } from "semantic-ui-react";

export default function ViewAllJobPostingsByPostingDate() {
  return (
    <div>
      <Container className="view-all-job-postings-by-posting-date">
        <Grid>
          <Grid.Row centered>
            <Reveal animated="rotate">
              <Reveal.Content visible>
                <Image circular size="small" src="time.svg" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image circular size="small" src="now.svg" />
              </Reveal.Content>
            </Reveal>
          </Grid.Row>
          <Grid.Row centered>
            <Button
              circular
              color="yellow"
              as={NavLink}
              to={"/jobPostings"}
              content="View All Job Postings by Posting Date"
            />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
