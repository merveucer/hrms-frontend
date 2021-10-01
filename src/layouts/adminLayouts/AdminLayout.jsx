import React from "react";
import { NavLink } from "react-router-dom";
import Headline from "../Headline";
import CompanyStaffUpdateButton from "../../pages/adminPages/CompanyStaffUpdateButton";
import { Button, Container, Grid } from "semantic-ui-react";

export default function AdminLayout() {
  let id = 1; // TODO: companyStaffId

  return (
    <div>
      <Container className="content">
        <Headline content="Admin Panel" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <CompanyStaffUpdateButton id={id} />
              <Button circular fluid color="violet" content="Edit App Details" as={NavLink} to={"/adminPanel/edit"} />
              <br />
              <Button circular fluid color="violet" content="Confirmations" as={NavLink} to={`/adminPanel/companyStaff/${id}/confirm`} />
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
