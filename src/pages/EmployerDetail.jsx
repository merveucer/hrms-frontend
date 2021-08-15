import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import EmployerService from "./../services/employerService";
import UserActivationService from "./../services/userActivationService";
import Headline from "../layouts/Headline";
import JobPostingList from "./JobPostingList";
import { Container, Header, Grid, Divider, Icon, Label, Segment} from "semantic-ui-react";

export default function EmployerDetail() {
  let { id } = useParams();

  const [employer, setEmployer] = useState({});
  const [userActivation, setUserActivation] = useState({});

  let employerService = new EmployerService();
  let userActivationService = new UserActivationService();

  useEffect(() => {
    employerService.getById(id).then((result) => setEmployer(result.data.data));
    userActivationService.getByUserId(id).then((result) => setUserActivation(result.data.data));
  }, []);

  return (
    <div>
      <Container className="content">
        <Headline content="Employer" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <Grid.Row>
                <Segment basic>
                  <Label circular basic color="pink" className="detail-date">
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width="2" />
                        <Grid.Column width="12">
                          <span className="orbitron">Joined in {new Date(userActivation.isActivatedDate).getFullYear()}</span>
                        </Grid.Column>
                        <Grid.Column width="2" />
                      </Grid.Row>
                    </Grid>
                  </Label>
                  <br />
                  
                  <Header>
                    <span className="detail-header">
                      <strong>{employer.companyName}</strong>
                    </span>
                  </Header>
                  <Icon name="linkify" />
                  {employer.webAddress}
                  <br />
                  <Icon name="envelope" />
                  {employer.email}
                  <br />
                  <Icon name="phone" />
                  {employer.phoneNumber}
                  <Divider />
                  <br />

                  <JobPostingList type={id} itemsPerRow="2" />
                </Segment>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
