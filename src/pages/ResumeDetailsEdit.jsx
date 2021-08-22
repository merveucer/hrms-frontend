import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Headline from "../layouts/Headline";
import ResumeService from "../services/resumeService";
import { Container, Grid } from "semantic-ui-react";
import ButtonsOfResumeDetailsEdit from "../layouts/ButtonsOfResumeDetailsEdit";

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
              <ButtonsOfResumeDetailsEdit
                content="Link"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/link/add/${resume.id}`}
                secondTo={`/link/delete/${resume.id}`}
              />
              <ButtonsOfResumeDetailsEdit
                content="Cover Letter"
                firstIcon="add"
                secondIcon="pencil alternate"
                firstTo={`/coverLetter/add/${resume.candidate?.id}`}
                secondTo={`/coverLetter/edit/${resume.candidate?.id}`}
              />
              <ButtonsOfResumeDetailsEdit
                content="Education"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/education/add/${resume.id}`}
                secondTo={`/education/delete/${resume.id}`}
              />
              <ButtonsOfResumeDetailsEdit
                content="Experience"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/experience/add/${resume.id}`}
                secondTo={`/experience/delete/${resume.id}`}
              />
              <ButtonsOfResumeDetailsEdit
                content="Language"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/languageLevel/add/${resume.id}`}
                secondTo={`/languageLevel/delete/${resume.id}`}
              />
              <ButtonsOfResumeDetailsEdit
                content="Skill"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/skill/add/${resume.id}`}
                secondTo={`/skill/delete/${resume.id}`}
              />
            </Grid.Column>
            <Grid.Column width="5" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
