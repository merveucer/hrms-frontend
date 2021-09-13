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
                firstTo={`/resumeDetails/resume/${resume.id}/link/add`}
                secondTo={`/resumeDetails/resume/${resume.id}/link/delete`}
              />
              <ButtonsOfResumeDetailsEdit
                content="Cover Letter"
                firstIcon="add"
                secondIcon="pencil alternate"
                firstTo={`/resumeDetails/resume/candidate/${resume.candidate?.id}/coverLetter/add`}
                secondTo={`/resumeDetails/resume/candidate/${resume.candidate?.id}/coverLetter/edit`}
              />
              <ButtonsOfResumeDetailsEdit
                content="Education"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/resumeDetails/resume/${resume.id}/education/add`}
                secondTo={`/resumeDetails/resume/${resume.id}/education/delete`}
              />
              <ButtonsOfResumeDetailsEdit
                content="Experience"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/resumeDetails/resume/${resume.id}/experience/add`}
                secondTo={`/resumeDetails/resume/${resume.id}/experience/delete`}
              />
              <ButtonsOfResumeDetailsEdit
                content="Language"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/resumeDetails/resume/${resume.id}/languageLevel/add`}
                secondTo={`/resumeDetails/resume/${resume.id}/languageLevel/delete`}
              />
              <ButtonsOfResumeDetailsEdit
                content="Skill"
                firstIcon="add"
                secondIcon="trash"
                firstTo={`/resumeDetails/resume/${resume.id}/skill/add`}
                secondTo={`/resumeDetails/resume/${resume.id}/skill/delete`}
              />
            </Grid.Column>
            <Grid.Column width="5" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
