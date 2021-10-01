import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Headline from "../layouts/Headline";
import DateLabel from "../layouts/DateLabel";
import ResumeService from "../services/resumeService";
import ExperienceService from "../services/experienceService";
import MessageModal from "../layouts/MessageModal";
import { Container, Grid, Segment, Button, Header } from "semantic-ui-react";

export default function ExperienceDeelet() {
  let { id } = useParams();

  const [resumes, setResumes] = useState([]);
  const [resume, setResume] = useState({});
  const [open, setOpen] = useState(false);
  
  let resumeService = new ResumeService();
  let experienceService = new ExperienceService();

  useEffect(() => {
    resumeService.getAllResumesDetailsByActivatedCandidate().then((result) => setResumes(result.data.data));
    resumeService.getById(id).then((result) => setResume(result.data.data));
  }, [resume]);

  const handleModal = (value) => {
    setOpen(value)
  };

  const handleDelete = (experienceId) => {    
    experienceService.delete(experienceId);
    resumeService.update({id: id});
    handleModal(true);
  };

  return (
    <div>
      <Container className="content">
        <Headline content="Delete Experience" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              {resumes.map((resume) => (
                <span>
                  {resume.id == id && (
                    <span key={resume.id}>
                      {resume.experiences.length === 0
                        ? <Segment raised textAlign="center" ><Header color="pink" content="No experience has been added to the resume yet." /></Segment>
                        : <span>
                            <DateLabel value={new Date().toDateString()} />
                            <br /><br /><br />

                            {resume.experiences.map((experience) => (
                              <Segment raised>
                                <Button circular compact  icon="trash" color="pink" floated="right" onClick={() =>  handleDelete(experience.id)} />
                                <br />
                                <strong>{experience.jobTitle?.title}</strong>
                                <br />
                                {experience.companyName}
                                <br />
                                <span className="extra">
                                  {new Date(experience.startingDate).getMonth()}.{new Date(experience.startingDate).getFullYear()}
                                  &nbsp;-&nbsp;
                                  {experience.terminationDate === "Devam ediyor."
                                    ? "Continues"
                                    : new Date(experience.terminationDate).getMonth() + "." + new Date(experience.terminationDate).getFullYear()}
                                </span>
                                <br /><br />
                              </Segment>))}
                          </span>}
                    </span>
                  )}
                </span>
              ))}
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="Deleted !" />
      </Container>
    </div>
  );
}
