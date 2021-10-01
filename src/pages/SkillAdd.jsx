import React, { useState } from "react";
import { useParams } from "react-router";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import SkillService from "./../services/skillService";
import ResumeService from "./../services/resumeService";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Form, Label, Button } from "semantic-ui-react";

export default function SkillAdd() {
  let { id } = useParams();

  const [open, setOpen] = useState(false);

  let skillService = new SkillService();
  let resumeService = new ResumeService();

  const initialValues = {
    resume: {id: id},
    skill: "",
  };

  const validationSchema = Yup.object({
    skill: Yup.string().required("Required Field"),
  });

  const onSubmit = (values, { resetForm }) => {
    skillService.add(values);
    resumeService.update({id: id});
    console.log(values);
    handleModal(true);
    setTimeout(() => {
      resetForm();
    }, 100);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const handleModal = (value) => {
    setOpen(value);
  };

  const handleChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Container className="content">
        <Headline content="Add Skill" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name="skill"
                    label="Skill"
                    onChange={(event, data) => handleChange("skill", data.value)}
                    value={formik.values.skill}
                  />
                  {formik.errors.skill && formik.touched.skill && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.skill} /><br /></span>}
                  <br />

                  <Button circular fluid type="submit" color="yellow" content="Add" />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="Added !" />
      </Container>
    </div>
  );
}
