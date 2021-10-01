import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import JobPostingService from "./../services/jobPostingService";
import FavoriteJobPostingService from "./../services/favoriteJobPostingService";
import Headline from "../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import MessageModal from "./../layouts/MessageModal";
import { Container, Header, Grid, Divider, Icon, Label, Button } from "semantic-ui-react";

export default function JobPostingDetail() {
  let { id } = useParams();

  const [jobPosting, setJobPosting] = useState({});
  const [open, setOpen] = useState(false);

  const history = useHistory();

  let jobPostingService = new JobPostingService();
  let favoriteJobPostingService = new FavoriteJobPostingService();

  useEffect(() => {
    jobPostingService.getById(id).then((result) => setJobPosting(result.data.data));
  }, []);

  const handleModal = (value) => {
    setOpen(value);
  };

  const handleMakeActiveOrPassive = (id, isActive) => {    
    jobPostingService.makeActiveOrPassive(id, isActive);
    handleModal(true);    
  };

  const handleAddToFavorites = (jobPosting) => {
    favoriteJobPostingService.add({jobPosting, candidate:{id: 8}}) // TODO: candidateId
  };

  return (
    <div>
      <Container className="content">
        <Headline content="Job Posting" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <Grid.Row>
                <DateLabel value={new Date(jobPosting.postingDate).toDateString()} />
                <br /><br /><br />

                <Button compact circular color="yellow" icon="bookmark" floated="right" onClick={() => handleAddToFavorites(jobPosting)} />
                <Button compact circular  color="violet" content="Make Passive" floated="right" onClick={() => handleMakeActiveOrPassive(jobPosting.id, false)} />                 
              </Grid.Row>
              <Grid.Row>                                 
                <Header>
                  <span className="detail-header">
                    <strong>{jobPosting.jobTitle?.title}</strong>
                  </span>
                </Header>
                {jobPosting.employer?.companyName}
                <br />
                <Icon name="linkify" />
                {jobPosting.employer?.webAddress}
                <br />
                <Icon name="envelope" />
                {jobPosting.employer?.email}
                <br />
                <Icon name="phone" />
                {jobPosting.employer?.phoneNumber}
                <Divider />
                <br />

                {jobPosting.jobDescription}
                <br /><br />
                <ul>
                  <li>
                    <strong>City</strong>
                    &nbsp;&nbsp;
                    {jobPosting.city?.city}
                  </li>
                  <li>
                    <strong>Working Time</strong>
                    &nbsp;&nbsp;
                    {jobPosting.workingTime?.time}
                  </li>
                  <li>
                    <strong>Working Type</strong>
                    &nbsp;&nbsp;
                    {jobPosting.workingType?.type}
                  </li>
                  <li>
                    <strong>Salary Min</strong>
                    &nbsp;&nbsp;
                    {jobPosting.salaryMin}
                  </li>
                  <li>
                    <strong>Salary Max</strong>
                    &nbsp;&nbsp;
                    {jobPosting.salaryMax}
                  </li>
                  <li>
                    <strong>Number of Open Positions</strong>
                    &nbsp;&nbsp;
                    <Label circular color="pink" className="orbitron">
                      {jobPosting.numberOfOpenPositions}
                    </Label>
                  </li>
                  <br />
                </ul>
                  
                <Label circular basic color="yellow" size="large">
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width="2" />
                      <Grid.Column width="2">
                        <Icon name="calendar alternate outline" size="big" />
                      </Grid.Column>
                      <Grid.Column width="10">
                        <span className="orbitron">
                          Closing Date
                          <br />
                          {new Date(jobPosting.closingDate).toDateString()}
                        </span>
                      </Grid.Column>
                      <Grid.Column width="2" />
                    </Grid.Row>
                  </Grid>
                </Label>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => history.push(`/employers/employer/${jobPosting.employer.id}`)} onOpen={() => handleModal(true)} open={open} content="Made passive !" />
      </Container>
    </div>
  );
}
