import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Grid, Reveal, Image, Button } from "semantic-ui-react";

export default function ViewAllJobPostingsByPostingDate() {
  return (
    <Container className="view-all-job-postings-by-posting-date">
      <Grid>
        <Grid.Row centered>
          <Reveal animated="rotate">
            <Reveal.Content visible>
              <Image circular size="small" src="https://res.cloudinary.com/merveucer/image/upload/v1629119568/time_qsf6do.svg" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image circular size="small" src="https://res.cloudinary.com/merveucer/image/upload/v1629119560/now_mtb4qy.svg" />
            </Reveal.Content>
          </Reveal>
        </Grid.Row>
        <Grid.Row centered>
          <Button circular color="yellow" as={NavLink} to={"/jobPostings"} content="View All Job Postings by Posting Date" />
        </Grid.Row>
      </Grid>
    </Container>
  );
}
