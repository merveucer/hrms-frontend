import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Headline from "../layouts/Headline";
import DateLabel from "../layouts/DateLabel";
import ResumeService from "../services/resumeService";
import CoverLetterService from "../services/coverLetterService";
import MessageModal from "../layouts/MessageModal";
import { Container, Grid, Segment, Button, Header } from "semantic-ui-react";

export default function CoverLetterEdit() {
  let { id } = useParams();

  const [resume, setResume] = useState({});
  const [coverLetters, setCoverLetters] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [openDeleteFromResume, setOpenDeleteFromResume] = useState(false);
  const [openAddedToResume, setOpenAddedToResume] = useState(false);
  
  let resumeService = new ResumeService();
  let coverLetterService = new CoverLetterService();

  useEffect(() => {    
    resumeService.getByCandidateId(id).then((result) => setResume(result.data.data));
    coverLetterService.getAllByCandidateId(id).then((result) => setCoverLetters(result.data.data));    
  }, [coverLetters]);

  const handleModalDelete = (value) => {
    setOpenDelete(value)
  };

  const handleModalDeleteFromResume = (value) => {
    setOpenDeleteFromResume(value)
  };

  const handleModalAddedToResume = (value) => {
    setOpenAddedToResume(value)
  };

  const handleDelete = (coverLetterId) => {
    coverLetterService.delete(coverLetterId);
    resumeService.update({id: 1});
    handleModalDelete(true);
  };
  
  const handleDeleteFromResume = () => {
    resumeService.deleteCoverLetterFromResume(resume.id);
    handleModalDeleteFromResume(true);
  }
  
  const handleAddedToResume = (coverLetterId) => {
    resumeService.addCoverLetterToResume(resume.id, coverLetterId);
    handleModalAddedToResume(true);
  }

  return (
    <div>
      <Container className="content">
        <Headline content="Edit Cover Letter" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              {coverLetters.length === 0
                ? <Segment raised textAlign="center" ><Header color="pink" content="No cover letter has been added." /></Segment>
                : <span>
                    <DateLabel value={new Date().toDateString()} />
                    <br /><br /><br />

                    {coverLetters.map((coverLetter) => (
                     <div key={coverLetter.candidate?.id} className="coverLetterEdit">
                        <Segment raised>
                          {resume.id === coverLetter.resume?.id 
                            ? <Button circular compact content="Remove from Resume" color="pink" floated="right" onClick={() =>  handleDeleteFromResume()} />
                            : <span>
                                <Button circular compact  icon="trash" color="pink" floated="right" onClick={() =>  handleDelete(coverLetter.id)} />
                                <Button circular compact  content=" Add to Resume" color="pink" floated="right" onClick={() =>  handleAddedToResume(coverLetter.id)} />                          
                              </span>}                      
                          <br />
                          <strong>{coverLetter.name}</strong>
                          <br /><br />{coverLetter.content}<br /><br />
                        </Segment>
                      </div>))}
                  </span>}              
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModalDelete(false)} onOpen={() => handleModalDelete(true)} open={openDelete} content="Deleted !" />        
        <MessageModal onClose={() => handleModalDeleteFromResume(false)} onOpen={() => handleModalDeleteFromResume(true)} open={openDeleteFromResume} content="Removed from resume !" />
        <MessageModal onClose={() => handleModalAddedToResume(false)} onOpen={() => handleModalAddedToResume(true)} open={openAddedToResume} content="Added to resume !" />
      </Container>
    </div>
  );
}
