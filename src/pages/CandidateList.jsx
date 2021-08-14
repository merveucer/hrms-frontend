import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ResumeService from "./../services/resumeService";
import { Card, Image, Button } from "semantic-ui-react";

export default function CandidateList() {
  const [resumes, setResumes] = useState([]);

  let resumeService = new ResumeService();

  useEffect(() => {
    resumeService.getAllResumesDetailsByActivatedCandidate().then((result) => setResumes(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group itemsPerRow="4">
        {resumes.map((resume) => (
          <Card raised key={resume.id}>
            <Card.Content textAlign="center" as={NavLink} to={`/candidates/candidate/${resume.candidate?.id}`}>
              <br />
              <Image circular size="small" src={resume.image?.url} />
              <br />
              <br />
              <Card.Header className="montserrat">
                {resume.candidate?.firstName} {resume.candidate?.lastName}
              </Card.Header>
              <Card.Meta className="montserrat">
                {resume.experiences.length == 0
                  ? resume.educations[0].department
                  : resume.experiences[0].jobTitle?.title}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra textAlign="center">
              {resume.links.map((link) =>
                link.linkName?.id == 1
                ? (<Button compact circular icon="github" color="black" href={link.url} target="blank" />)
                : (<Button compact circular icon="linkedin" color="linkedin" href={link.url} target="blank" />)
              )}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
