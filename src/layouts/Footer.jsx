import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Divider, Grid, List, Icon } from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
      <Container className="footer">
        <Divider />
        <br />

        <Grid className="montserrat">
          <Grid.Row centered>
            <List link horizontal>
              <List.Item as={NavLink} to="/home">
                Home
              </List.Item>
              <List.Item as={NavLink} to="/jobPostings">
                Job Postings
              </List.Item>
              <List.Item as={NavLink} to="/candidates">
                Candidates
              </List.Item>
              <List.Item as={NavLink} to="/employers">
                Employers
              </List.Item>
              <List.Item as={NavLink} to="/aboutUs">
                About Us
              </List.Item>
            </List>
          </Grid.Row>
          <Grid.Row centered>2021 ・ Merve Üçer</Grid.Row>
          <Grid.Row centered>
            <List link horizontal>
              <List.Item href="https://github.com/merveucer" target="blank">
                <Icon name="github" size="large" />
              </List.Item>
              <List.Item
                href="https://www.linkedin.com/in/merveucer/"
                target="blank"
              >
                <Icon name="linkedin" size="large" />
              </List.Item>
            </List>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}
