import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Headline from "./../../layouts/Headline";
import EmployerService from "./../../services/employerService";
import JobPostingService from "./../../services/jobPostingService";
import MessageModal from "./../../layouts/MessageModal";
import CardOfConfirm from "../../layouts/adminLayouts/CardOfConfirm";
import { Container, Grid, Header, Segment } from "semantic-ui-react";

export default function Confirm() {
  let { id } = useParams();

  const [employersWaitingForAccountConfirmation, setEmployersWaitingForAccountConfirmation] = useState([]);
  const [employersWaitingForUpdateConfirmation, setEmployersWaitingForUpdateConfirmation] = useState([]);
  const [jobPostingsWaitingForPostingConfirmation, setJobPostingsWaitingForPostingConfirmation] = useState([]);
  const [openConfirmed, setOpenConfirmed] = useState(false);
  const [openUnconfirmed, setOpenUnconfirmed] = useState(false);

  let employerService = new EmployerService();
  let jobPostingService = new JobPostingService();

  useEffect(() => {
    employerService.getAllOnesThatWaitingForAccountConfirmation().then((result) => setEmployersWaitingForAccountConfirmation(result.data.data));
    employerService.getAllOnesThatWaitingForUpdateConfirmation().then((result) => setEmployersWaitingForUpdateConfirmation(result.data.data));
    jobPostingService.getAllOnesThatWaitingForPostingConfirmation().then((result) => setJobPostingsWaitingForPostingConfirmation(result.data.data));
  }, []);

  const handleModalConfirmed = (value) => {
    setOpenConfirmed(value)
    if (value === false) {
      window.location.reload();
    }
  };

  const handleModalUnconfirmed = (value) => {
    setOpenUnconfirmed(value)
    if (value === false) {
      window.location.reload();
    }
  };

  const handleEmployerConfirmation = (employerId, isConfirmed, userConfirmationTypeId) => {
    employerService.confirm(id, employerId, isConfirmed, userConfirmationTypeId);
    if (isConfirmed) {
      handleModalConfirmed(true);
    } else {
      handleModalUnconfirmed(true);
    }  
  };

  const handleJobPostingConfirmation = (isConfirmed, jobPostingConfirmationTypeId, jobPostingId) => {
    jobPostingService.confirm(id, isConfirmed, jobPostingConfirmationTypeId, jobPostingId);
    if (isConfirmed) {
      handleModalConfirmed(true);
    } else {
      handleModalUnconfirmed(true);
    }
  };

  return (
    <div>
      <Container className="content">
        <Headline content="Confirmations" />

        <Grid>
          <Grid.Row columns="3">
            <Grid.Column>
              <Header size="large" textAlign="center" content="Account Confirmations" className="orbitron" />
              <Segment basic color="pink" />
              {employersWaitingForAccountConfirmation.map((employer) => (
                <CardOfConfirm
                  header={employer.companyName}
                  confirm={() => handleEmployerConfirmation(employer.id, true, 1)}
                  unconfirm={() => handleEmployerConfirmation(employer.id, false, 1)}
                  view={`/employers/employer/${employer.id}`}
                />))}
            </Grid.Column>
            <Grid.Column>
              <Header size="large" textAlign="center" content="Update Confirmations" className="orbitron" />
              <Segment basic color="pink" />
              {employersWaitingForUpdateConfirmation.map((employer) => (
                <CardOfConfirm
                  header={employer.companyName}
                  confirm={() => handleEmployerConfirmation(employer.id, true, 2)}
                  unconfirm={() => handleEmployerConfirmation(employer.id, false, 2)}
                  view={`/employers/updatedEmployer/${employer.id}`}
                />))}
            </Grid.Column>
            <Grid.Column>
              <Header size="large" textAlign="center" content="Posting Confirmations" className="orbitron" />
              <Segment basic color="pink" />
              {jobPostingsWaitingForPostingConfirmation.map((jobPosting) => (
                <CardOfConfirm
                  header={jobPosting.employer.companyName}
                  confirm={() => handleJobPostingConfirmation(true, 1, jobPosting.id)}
                  unconfirm={() => handleJobPostingConfirmation(false, 1, jobPosting.id)}
                  view={`/jobPostings/jobPosting/${jobPosting.id}`}
                />))}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModalConfirmed(false)} onOpen={() => handleModalConfirmed(true)} open={openConfirmed} content="Confirmed !" />
        <MessageModal onClose={() => handleModalUnconfirmed(false)} onOpen={() => handleModalUnconfirmed(true)} open={openUnconfirmed} content="Unconfirmed !" />
      </Container>      
    </div>
  );
}
