import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Headline from "./../layouts/Headline";
import ResumeService from "./../services/resumeService";
import { Container, Grid, Header, Image, Segment, Divider, Icon, Label, Button} from "semantic-ui-react";

export default function CandidateDetail() {
  let { id } = useParams();

  const [resumes, setResumes] = useState([]);

  let resumeService = new ResumeService();

  useEffect(() => {
    resumeService.getAllResumesDetailsByActivatedCandidate().then((result) => setResumes(result.data.data));
  }, []);

  return (
    <div>
      <Container className="content">
        <Headline content="Candidate" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              {resumes.map((resume) => (
                <Grid key={resume.id}>
                  {resume.candidate?.id == id ? (
                    <Grid.Row>
                      <Grid.Column>
                        <Segment basic className="montserrat">
                          <Image circular inline size="small" src={resume.image?.url} />
                          <Header>
                            <span className="detail-header">
                              {resume.candidate?.firstName} {resume.candidate?.lastName}
                            </span>
                          </Header>
                          {resume.experiences.length == 0
                            ? resume.educations[0].department
                            : resume.experiences[0].jobTitle?.title}
                          <br />
                          <Icon name="envelope" />
                          {resume.candidate?.email}
                          <br />
                          <br />
                          {resume.links.map((link) =>
                            link.linkName?.id == 1 
                            ? (<Button compact circular icon="github" color="black" href={link.url} target="blank" />)
                            : (<Button compact circular icon="linkedin" color="linkedin" href={link.url} target="blank" />
                            )
                          )}
                          <Divider />
                          <br />

                          <Label circular basic color="pink" className="detail-date">
                            <Grid>
                              <Grid.Row>
                                <Grid.Column width="2" />
                                <Grid.Column width="12">
                                  <span className="orbitron">
                                    {new Date(resume.creationDate).toDateString()}
                                  </span>
                                </Grid.Column>
                                <Grid.Column width="2" />
                              </Grid.Row>
                            </Grid>
                          </Label>
                          <br />
                          <br />

                          <Segment raised className="montserrat">
                            <Header as="h5" content="Cover Letter" className="orbitron" />
                            <br />
                            {resume.coverLetter?.content}
                            <br />
                            <br />
                          </Segment>

                          <Segment raised className="montserrat">
                            <Header as="h5" content="Educations" className="orbitron" />
                            <br />
                            {resume.educations.map((education) => (
                              <span>
                                <strong>
                                  {education.nameOfEducationalInstitution}
                                </strong>
                                <br />
                                {education.degree} ・ {education.department}
                                <br />
                                <span className="extra">
                                  {new Date(education.startingDate).getFullYear()}
                                  &nbsp;-&nbsp;
                                  {education.graduationDate == "Devam ediyor."
                                    ? "Continues"
                                    : new Date(education.graduationDate).getFullYear()}
                                </span>
                                <br />
                                <br />
                              </span>
                            ))}
                          </Segment>

                          <Segment raised className="montserrat">
                            <Header as="h5" content="Experiences" className="orbitron" />
                            <br />
                            {resume.experiences.map((experience) => (
                              <span>
                                <strong>{experience.companyName}</strong>
                                <br />
                                {experience.jobTitle?.title}
                                <br />
                                <span className="extra">
                                  {new Date(experience.startingDate).getMonth()}.{new Date(experience.startingDate).getFullYear()}
                                  &nbsp;-&nbsp;
                                  {experience.terminationDate == "Devam ediyor."
                                    ? "Continues"
                                    : new Date(experience.terminationDate).getMonth() + "." + new Date(experience.terminationDate).getFullYear()}
                                </span>
                                <br />
                                <br />
                              </span>
                            ))}
                          </Segment>

                          <Segment raised className="montserrat">
                            <Header as="h5" content="Languages" className="orbitron" />
                            <br />
                            {resume.languageLevels.map((languageLevel) => (
                              <span>
                                <strong>{languageLevel.language?.language}</strong> <span className="extra">{languageLevel.level?.level}</span>
                                <br />
                                <br />
                              </span>
                            ))}
                          </Segment>

                          <Segment raised className="montserrat">
                            <Header as="h5" content="Skills" className="orbitron" />
                            <br />
                            {resume.skills.map((skill) => (
                              <span>
                                <strong>{skill.skill}</strong>
                                &nbsp;&nbsp;&nbsp;
                              </span>
                            ))}
                            <br />
                            <br />
                          </Segment>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  ) : null}
                </Grid>
              ))}
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
