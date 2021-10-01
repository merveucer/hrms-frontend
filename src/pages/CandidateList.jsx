import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ResumeService from "./../services/resumeService";
import GithubButton from "./../layouts/GithubButton";
import LinkedinButton from "./../layouts/LinkedinButton";
import { Card, Divider, Image} from "semantic-ui-react";

export default function CandidateList() {
  const [resumes, setResumes] = useState([]);

  let resumeService = new ResumeService();

  useEffect(() => {
    resumeService.getAllResumesDetailsByActivatedCandidate().then((result) => setResumes(result.data.data));
  }, []);

  return (
    <Card.Group itemsPerRow="4">
      {resumes.map((resume) => (        
        <Card raised key={resume.id}>          
          <Card.Content textAlign="center" as={NavLink} to={`/candidates/candidate/${resume.candidate?.id}`}>        
            <br />
            {resume.image == null
              ? <Image circular size="small" src="https://res.cloudinary.com/merveucer/image/upload/v1631964376/user_ckfrbd.svg" />
              : <Image circular size="small" src={resume.image?.url} />}            
            <br /><br />
            <Card.Header className="montserrat">
              {resume.candidate?.firstName} {resume.candidate?.lastName}
            </Card.Header>
            <Card.Meta>
              {resume.experiences.length === 0 && resume.educations.length === 0
                ? <br />
                : resume.experiences.length === 0
                  ? resume.educations[0].department
                  : resume.experiences[0].jobTitle?.title}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra textAlign="center">
            {resume.links.length === 0
              ? <Divider hidden />
              : resume.links.map((link) =>
                (link.linkName?.id === 1 
                  ? <GithubButton url={link.url} />
                  : <LinkedinButton url={link.url} />)
            )}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}
