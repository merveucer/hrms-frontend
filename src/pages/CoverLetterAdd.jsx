import React, { useState } from "react";
import { useParams } from "react-router";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import CoverLetterService from "./../services/coverLetterService";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Form, Label, Button  } from "semantic-ui-react";

export default function CoverLetterAdd() {
  let { id } = useParams();
  
  const [open, setOpen] = useState(false);

  let coverLetterService = new CoverLetterService();

  const initialValues = {
    candidate: {id: id},
    name: "",
    content: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required Field"),
    content: Yup.string().max(1150, "Over 1150 Characters").required("Required Field"),
  });

  const onSubmit = (values, { resetForm }) => {
    coverLetterService.add(values);
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
        <Headline content="Add Cover Letter" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name="name"
                    label="Name"
                    onChange={(event, data) => handleChange("name", data.value)}
                    value={formik.values.name}
                  />
                  {formik.errors.name && formik.touched.name && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.name} /><br /><br /></span>}
                  <Form.TextArea
                    name="content"
                    label="Content"
                    placeholder=". . ."
                    onChange={(event, data) => handleChange("content", data.value)}
                    value={formik.values.content}
                  />
                  {formik.errors.content && formik.touched.content && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.content} /><br /></span>}
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
