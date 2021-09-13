import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import EmployerService from "./../services/employerService";
import UpdatedEmployerService from './../services/updatedEmployerService';
import UserActivationService from "./../services/userActivationService";
import Headline from "../layouts/Headline";
import JobPostingList from "./JobPostingList";
import DateLabel from './../layouts/DateLabel';
import { Container, Header, Grid, Divider, Icon, Button } from "semantic-ui-react";

export default function EmployerDetail() {
  let { id } = useParams();

  const [employer, setEmployer] = useState({});
  const [updatedEmployers, setUpdatedEmployers] = useState([]);
  const [userActivation, setUserActivation] = useState({});

  let employerService = new EmployerService();
  let updatedEmployerService = new UpdatedEmployerService();
  let userActivationService = new UserActivationService();

  useEffect(() => {
    employerService.getById(id).then((result) => setEmployer(result.data.data));
    updatedEmployerService.getAll().then((result) => setUpdatedEmployers(result.data.data));
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
                <DateLabel value={"Joined in " + new Date(userActivation.isActivatedDate).getFullYear()} />
                <br /><br /><br />
                <Button circular compact floated="right" color="yellow" icon="pencil alternate" as={NavLink} to={`/employers/employer/${id}/update`}  />

                {updatedEmployers.map((updatedEmployer) => (
                  updatedEmployer.employer.id == id 
                  ? <Button circular compact basic disabled color="black" floated="right" content="Waiting for Update Confirmation" />
                  : null
                ))}                                
              </Grid.Row>
              <Grid.Row>
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

                <JobPostingList type="byEmployer" itemsPerRow="2" id={id} />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
