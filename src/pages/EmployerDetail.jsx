import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import EmployerService from "./../services/employerService";
import UserActivationService from "./../services/userActivationService";
import JobPostingService from "./../services/jobPostingService";
import Headline from "../layouts/Headline";
import { Container, Header, Grid, Divider, Icon, Label, Rating, Card, Button, Segment} from "semantic-ui-react";

export default function EmployerDetail() {
  let { id } = useParams();

  const [employer, setEmployer] = useState({});
  const [userActivation, setUserActivation] = useState({});
  const [jobPostings, setJobPostings] = useState([]);

  let employerService = new EmployerService();
  let userActivationService = new UserActivationService();
  let jobPostingService = new JobPostingService();

  useEffect(() => {
    employerService.getById(id).then((result) => setEmployer(result.data.data));
    userActivationService.getByUserId(id).then((result) => setUserActivation(result.data.data));
    jobPostingService.getAllActiveOnesByEmployerId(id).then((result) => setJobPostings(result.data.data));
  }, []);

  return (
    <div>
      <Container className="content">
        <Headline content="Employer" />

        <Grid className="montserrat">
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
                          <span className="orbitron">
                            {"Joined in " +
                              new Date(
                                userActivation.isActivatedDate
                              ).getFullYear()}
                          </span>
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

                  <Card.Group itemsPerRow="2">
                    {jobPostings.map((jobPosting) => (
                      <Card raised key={jobPosting.id} className="montserrat">
                        <Card.Content>
                          <Rating
                            maxRating={1}
                            defaultRating={0}
                            icon="star"
                            size="huge"
                            className="job-posting-favorite"
                          />
                          <Card.Header className="montserrat">
                            {jobPosting.jobTitle?.title}
                          </Card.Header>
                          <Card.Meta>
                            <strong>Number of Open Positions</strong>
                            &nbsp;
                            <Label circular color="pink" className="orbitron">
                              {jobPosting.numberOfOpenPositions}
                            </Label>
                          </Card.Meta>
                          <Card.Description className="orbitron">
                            <strong>Posting Date</strong>
                            &nbsp;&nbsp;
                            {new Date(jobPosting.postingDate).toDateString()}
                            <br />
                            <strong>Closing Date</strong>
                            &nbsp;&nbsp;
                            {new Date(jobPosting.closingDate).toDateString()}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content>
                          <Button
                            circular
                            floated="right"
                            color="violet"
                            content="View Detail"
                            as={NavLink}
                            to={`/jobPostings/jobPosting/${jobPosting.id}`}
                          />
                        </Card.Content>
                      </Card>
                    ))}
                  </Card.Group>
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
