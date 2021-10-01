import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import Headline from "./../layouts/Headline";
import ResumeService from "./../services/resumeService";
import GithubButton from "./../layouts/GithubButton";
import LinkedinButton from "./../layouts/LinkedinButton";
import DateLabel from "./../layouts/DateLabel";
import { Container, Grid, Header, Image, Segment, Divider, Icon, Button } from "semantic-ui-react";
import LanguageLevelIcons from "./../layouts/LanguageLevelIcons";

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
                  {resume.candidate?.id == id && (
                    <Grid.Row>
                      <Grid.Column>
                        <Button circular compact floated="right" color="yellow" icon="pencil alternate" as={NavLink} to={`/candidates/resume/${resume.id}/edit`} />
                        <Button circular compact floated="right" color="yellow" icon="cog" as={NavLink} to={`/candidates/candidate/${resume.candidate?.id}/update`} />
                        <Button circular compact floated="right" color="pink" content="Favorites" as={NavLink} to={`/candidates/candidate/${resume.candidate?.id}/favoriteJobPostings`} />
                        {resume.image == null
                          ? <Image circular size="small" src="https://res.cloudinary.com/merveucer/image/upload/v1631964376/user_ckfrbd.svg" />
                          : <Image circular size="small" src={resume.image?.url} />}
                        <Header>
                          <span className="detail-header">
                            {resume.candidate?.firstName} {resume.candidate?.lastName}
                          </span>
                        </Header>
                        {resume.experiences.length === 0 && resume.educations.length === 0
                          ? null
                          : resume.experiences.length === 0
                            ? <span>{resume.educations[0].department}<br /></span>
                            : <span>{resume.experiences[0].jobTitle?.title}<br /></span>}
                        <Icon name="envelope" />
                        {resume.candidate?.email}
                        <br />
                        {resume.links.length === 0
                          ? null
                          : <span>
                              <br />
                              {(resume.links.map((link) =>
                                (link.linkName?.id === 1 
                                  ? <GithubButton url={link.url} />
                                  : <LinkedinButton url={link.url} />)))}
                            </span>}
                        <Divider />                          

                        {resume.coverLetter === null && resume.educations.length === 0 && resume.experiences.length === 0 && resume.languageLevels.length === 0 && resume.skills.length === 0
                          ? null
                          : <span><br /><DateLabel value={new Date(resume.creationDate).toDateString()} /><br /><br /></span>}

                        {resume.coverLetter === null
                          ? null
                          : <Segment raised>
                              <Header as="h5" content="Cover Letter" className="orbitron" />
                              <br />{resume.coverLetter?.content}<br /><br />
                            </Segment>}

                        {resume.educations.length === 0
                        ? null
                        : <Segment raised>
                            <Header as="h5" content="Educations" className="orbitron" />
                            <br />
                            {resume.educations.map((education) => (
                              <span>
                                <strong>{education.nameOfEducationalInstitution}</strong>
                                <br />{education.degree} ・ {education.department}<br />
                                <span className="extra">
                                  {new Date(education.startingDate).getFullYear()}
                                  &nbsp;-&nbsp;
                                  {education.graduationDate === "Devam ediyor."
                                    ? "Continues"
                                    : new Date(education.graduationDate).getFullYear()}
                                </span>
                                <br /><br />
                              </span>
                            ))}
                          </Segment>}

                        {resume.experiences.length === 0
                        ? null
                        : <Segment raised>
                            <Header as="h5" content="Experiences" className="orbitron" />
                            <br />
                            {resume.experiences.map((experience) => (
                              <span>
                                <strong>{experience.jobTitle?.title}</strong>
                                <br />{experience.companyName}<br />
                                <span className="extra">
                                  {new Date(experience.startingDate).getMonth()}.{new Date(experience.startingDate).getFullYear()}
                                  &nbsp;-&nbsp;
                                  {experience.terminationDate === "Devam ediyor."
                                    ? "Continues"
                                    : new Date(experience.terminationDate).getMonth() + "." + new Date(experience.terminationDate).getFullYear()}
                                </span>
                                <br /><br />
                              </span>
                            ))}
                          </Segment>}

                        {resume.languageLevels.length === 0
                          ? null
                          : <Segment raised>
                              <Header as="h5" content="Languages" className="orbitron" />
                              <br />
                              {resume.languageLevels.map((languageLevel) => (
                                <span>
                                  <LanguageLevelIcons level={languageLevel.level?.level} />
                                  &nbsp;&nbsp;
                                  {languageLevel.language?.language}
                                  <br /><br />
                                </span>
                              ))}
                            </Segment>}

                        {resume.skills.length === 0
                          ? null
                          : <Segment raised>
                              <Header as="h5" content="Skills" className="orbitron" />
                              <br />
                              {resume.skills.map((skill) => (<span>・ {skill.skill}&nbsp;&nbsp;&nbsp;</span>))}
                              <br /><br />
                            </Segment>}
                      </Grid.Column>
                    </Grid.Row>
                  )}
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
