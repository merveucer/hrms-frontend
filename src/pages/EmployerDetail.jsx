import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import EmployerService from "./../services/employerService";
import UpdatedEmployerService from "./../services/updatedEmployerService";
import UserActivationService from "./../services/userActivationService";
import Headline from "../layouts/Headline";
import JobPostingList from "./JobPostingList";
import DateLabel from "./../layouts/DateLabel";
import { Container, Header, Grid, Divider, Icon, Button } from "semantic-ui-react";

export default function EmployerDetail() {
  let { id, type } = useParams();

  const [employer, setEmployer] = useState({});
  const [updatedEmployers, setUpdatedEmployers] = useState([]);
  const [userActivation, setUserActivation] = useState({});

  let employerService = new EmployerService();
  let updatedEmployerService = new UpdatedEmployerService();
  let userActivationService = new UserActivationService();

  useEffect(() => {
    if (type == "employer") {
      employerService.getById(id).then((result) => setEmployer(result.data.data));
      updatedEmployerService.getAll().then((result) => setUpdatedEmployers(result.data.data));
    } else if (type == "updatedEmployer") {
      employerService.getOneThatWaitingForUpdateConfirmationById(id).then((result) => setEmployer(result.data.data));
    }    
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
                <Button circular compact floated="right" color="yellow" icon="cog" as={NavLink} to={`/employers/employer/${id}/update`}  />
                <Button compact circular floated="right" color="violet" content="Post a Job" as={NavLink} to={`/employers/employer/${id}/jobPosting/add`} />
              </Grid.Row>
              <Grid.Row>
                  <Header>
                  <span className="detail-header">
                    {employer.companyName}
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
                  
                  {updatedEmployers.map((updatedEmployer) => (
                    updatedEmployer.employer.id == id &&
                    <span><br /><br /><Button circular compact basic disabled fluid color="black" content="Waiting for Update Confirmation" /></span>
                  ))}
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
