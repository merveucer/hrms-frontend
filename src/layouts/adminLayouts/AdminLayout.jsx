import React from "react";
import { NavLink } from "react-router-dom";
import Headline from "../Headline";
import { Button, Container, Grid } from "semantic-ui-react";

export default function AdminLayout() {
  return (
    <div>
      <Container className="content">
        <Headline content="Admin Panel" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="5" />
            <Grid.Column width="6">
              <Button circular fluid color="violet" content="Edit App Details" as={NavLink} to={"/adminPanel/edit"} />
              <br />
              <Button circular fluid color="violet" content="Confirm" as={NavLink} to={"/adminPanel/confirm"} />
              <br />
              <Button circular fluid color="yellow" content="Update Account Information" as={NavLink} to={"/adminPanel/companyStaff/update"} />
            </Grid.Column>
            <Grid.Column width="5" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
