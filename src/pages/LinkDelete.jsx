import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Headline from "../layouts/Headline";
import DateLabel from "../layouts/DateLabel";
import ResumeService from "../services/resumeService";
import LinkService from "../services/linkService";
import GithubButton from "../layouts/GithubButton";
import LinkedinButton from "../layouts/LinkedinButton";
import MessageModal from "../layouts/MessageModal";
import { Container, Grid, Segment, Button, Header } from "semantic-ui-react";

export default function LinkDelete() {
  let { id } = useParams();

  const [resumes, setResumes] = useState([]);
  const [resume, setResume] = useState({});
  const [open, setOpen] = useState(false);
  
  let resumeService = new ResumeService();
  let linkService = new LinkService();

  useEffect(() => {
    resumeService.getAllResumesDetailsByActivatedCandidate().then((result) => setResumes(result.data.data));
    resumeService.getById(id).then((result) => setResume(result.data.data));
  }, [resume]);

  const handleModal = (value) => {
    setOpen(value)
  };

  const handleDelete = (linkId) => {    
    linkService.delete(linkId);
    resumeService.update({id: id});
    handleModal(true);
  };

  return (
    <div>
      <Container className="content">
        <Headline content="Delete Link" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              {resumes.map((resume) => (
                <span>
                  {resume.id == id && (
                    <span key={resume.id}>
                      {resume.links.length === 0
                        ? <Segment raised textAlign="center" ><Header color="pink" content="No link has been added to the resume yet." /></Segment>
                        : <span>
                            <DateLabel value={new Date().toDateString()} />
                            <br /><br /><br />

                            {(resume.links.map((link) =>
                              (link.linkName?.id === 1 
                                ? <Segment raised>
                                    <Button circular compact  icon="trash" color="pink" floated="right" onClick={() =>  handleDelete(link.id)} />
                                    <br />
                                    <GithubButton url={link.url} />&nbsp;&nbsp;&nbsp;<strong>{link.url}</strong>
                                    <br /><br />
                                  </Segment>
                                : <Segment raised>
                                    <Button circular compact icon="trash" color="pink" floated="right" onClick={() =>  handleDelete(link.id)} />
                                    <br />
                                    <LinkedinButton url={link.url} />&nbsp;&nbsp;&nbsp;<strong>{link.url}</strong>
                                    <br /><br />
                                  </Segment>)))}
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
