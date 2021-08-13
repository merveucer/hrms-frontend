import React, { useState, useEffect } from "react";
import CandidateService from "./../services/candidateService";
import { Card, Image, Button } from "semantic-ui-react";

export default function CandidateList() {
  const [resumes, setResumes] = useState([]);

  let candidateService = new CandidateService();

  useEffect(() => {
    candidateService.getAllResumesDetailsByActivatedCandidate().then((result) => setResumes(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group itemsPerRow="4">
        {resumes.map((resume) => (
          <Card raised key={resume.id} href="#">
            <Card.Content textAlign="center">
              <br />
              <Image circular size="small" src={resume.image?.url} />
              <br />
              <br />
              <Card.Header className="montserrat">
                {resume.candidate?.firstName} {resume.candidate?.lastName}
              </Card.Header>
              <Card.Meta>
                {resume.experiences.length == 0
                  ? resume.educations[0].department
                  : resume.experiences[0].jobTitle?.title}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra textAlign="center">
              {resume.links.map((link) =>
                link.linkName?.id == 1 
                ? (<Button compact circular icon="github" color="black" href={link.url} />)
                : (<Button compact circular icon="linkedin" color="linkedin" href={link.url} />)
              )}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
