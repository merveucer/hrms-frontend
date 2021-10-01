import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Headline from "../layouts/Headline";
import DateLabel from "../layouts/DateLabel";
import ResumeService from "../services/resumeService";
import EducationService from "../services/educationService";
import MessageModal from "../layouts/MessageModal";
import { Container, Grid, Segment, Button, Header } from "semantic-ui-react";

export default function EducationDelete() {
  let { id } = useParams();

  const [resumes, setResumes] = useState([]);
  const [resume, setResume] = useState({});
  const [open, setOpen] = useState(false);
  
  let resumeService = new ResumeService();
  let educationService = new EducationService();

  useEffect(() => {
    resumeService.getAllResumesDetailsByActivatedCandidate().then((result) => setResumes(result.data.data));
    resumeService.getById(id).then((result) => setResume(result.data.data));
  }, [resume]);

  const handleModal = (value) => {
    setOpen(value)
  };

  const handleDelete = (educationId) => {    
    educationService.delete(educationId);
    resumeService.update({id: id});
    handleModal(true);
  };

  return (
    <div>
      <Container className="content">
        <Headline content="Delete Education" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              {resumes.map((resume) => (
                <span>
                  {resume.id == id && (
                    <span key={resume.id}>
                      {resume.educations.length === 0
                        ? <Segment raised textAlign="center" ><Header color="pink" content="No education has been added to the resume yet." /></Segment>
                        : <span>
                            <DateLabel value={new Date().toDateString()} />
                            <br /><br /><br />

                            {resume.educations.map((education) => (
                              <Segment raised>
                                <Button circular compact  icon="trash" color="pink" floated="right" onClick={() =>  handleDelete(education.id)} />
                                <br />
                                <strong>{education.nameOfEducationalInstitution}</strong>
                                <br />
                                {education.degree} ・ {education.department}
                                <br />
                                <span className="extra">
                                  {new Date(education.startingDate).getFullYear()}
                                  &nbsp;-&nbsp;
                                  {education.graduationDate === "Devam ediyor."
                                    ? "Continues"
                                    : new Date(education.graduationDate).getFullYear()}
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
