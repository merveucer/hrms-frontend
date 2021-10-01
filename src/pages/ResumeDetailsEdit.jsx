import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Headline from "../layouts/Headline";
import ResumeService from "../services/resumeService";
import ButtonsOfEdit from "../layouts/ButtonsOfEdit";
import { Container, Grid } from "semantic-ui-react";

export default function ResumeDetailsEdit() {
  let { id } = useParams();

  const [resume, setResume] = useState({});

  let resumeService = new ResumeService();

  useEffect(() => {
    resumeService.getById(id).then((result) => setResume(result.data.data));
  }, []);

  return (
    <div>
      <Container className="content">
        <Headline content="Edit Resume Details" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="5" />
            <Grid.Column width="6">
              <ButtonsOfEdit 
                content="Link"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/candidates/resume/${resume.id}/link/add`}
                secondTo={`/candidates/resume/${resume.id}/link/delete`}
              />
              <ButtonsOfEdit
                content="Cover Letter"
                firstIcon="add"
                secondIcon="pencil alternate"
                firstTo={`/candidates/candidate/${resume.candidate?.id}/coverLetter/add`}
                secondTo={`/candidates/candidate/${resume.candidate?.id}/coverLetter/edit`}
              />
              <ButtonsOfEdit
                content="Education"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/candidates/resume/${resume.id}/education/add`}
                secondTo={`/candidates/resume/${resume.id}/education/delete`}
              />
              <ButtonsOfEdit
                content="Experience"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/candidates/resume/${resume.id}/experience/add`}
                secondTo={`/candidates/resume/${resume.id}/experience/delete`}
              />
              <ButtonsOfEdit
                content="Language"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/candidates/resume/${resume.id}/languageLevel/add`}
                secondTo={`/candidates/resume/${resume.id}/languageLevel/delete`}
              />
              <ButtonsOfEdit
                content="Skill"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/candidates/resume/${resume.id}/skill/add`}
                secondTo={`/candidates/resume/${resume.id}/skill/delete`}
              />
            </Grid.Column>
            <Grid.Column width="5" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
