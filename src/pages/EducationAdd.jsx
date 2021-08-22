import React, { useState } from "react";
import { useParams } from "react-router";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import EducationService from "./../services/educationService";
import ResumeService from './../services/resumeService';
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Form, Label, Button } from "semantic-ui-react";

export default function EducationAdd() {
  let { id } = useParams();

  const [open, setOpen] = useState(false);

  let educationService = new EducationService();
  let resumeService = new ResumeService();

  const initialValues = {
    resume: {id: id},
    nameOfEducationalInstitution: "",
    department: "",
    degree: "",
    startingDate: "",
    graduationDate: "",
  };

  const validationSchema = Yup.object({
    resume: Yup.object().required(),
    nameOfEducationalInstitution: Yup.string().required(),
    department: Yup.string().required(),
    degree: Yup.string().required(),
    startingDate: Yup.date().required(),
    graduationDate: Yup.date(),
  });

  const onSubmit = (values, { resetForm }) => {
    educationService.add(values);
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
        <Headline content="Add Education" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name="nameOfEducationalInstitution"
                    label="Name of Educational Institution"
                    onChange={(event, data) => handleChange("nameOfEducationalInstitution", data.value)}
                    onBlur={formik.onBlur}
                    value={formik.values.nameOfEducationalInstitution}
                  />
                  {formik.errors.nameOfEducationalInstitution && formik.touched.nameOfEducationalInstitution
                  ? (<Label basic pointing color="pink" content={formik.errors.nameOfEducationalInstitution} />)
                  : null}
                  <Form.Input
                    name="department"
                    label="Department"
                    onChange={(event, data) => handleChange("department", data.value)}
                    onBlur={formik.onBlur}
                    value={formik.values.department}
                  />
                  {formik.errors.department && formik.touched.department
                  ? (<Label basic pointing color="pink" content={formik.errors.department} />)
                  : null}
                  <Form.Input
                    name="degree"
                    label="Degree"
                    onChange={(event, data) => handleChange("degree", data.value)}
                    onBlur={formik.onBlur}
                    value={formik.values.degree}
                  />
                  {formik.errors.degree && formik.touched.degree
                  ? (<Label basic pointing color="pink" content={formik.errors.degree} />)
                  : null}
                  <Form.Group widths="equal">
                    <Form.Input
                      name="startingDate"
                      label="Starting Date"
                      placeholder="YYYY-MM-DD"
                      onChange={(event, data) => handleChange("startingDate", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.startingDate}
                    />
                    {formik.errors.startingDate && formik.touched.startingDate
                    ? (<Label basic pointing color="pink" content={formik.errors.startingDate} />)
                    : null}
                    <Form.Input
                      name="graduationDate"
                      label="Graduation Date (Optional)"
                      placeholder="YYYY-MM-DD"
                      onChange={(event, data) => handleChange("graduationDate", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.graduationDate}
                    />
                    {formik.errors.graduationDate && formik.touched.graduationDate
                    ? (<Label basic pointing color="pink" content={formik.errors.graduationDate} />)
                    : null}
                    </Form.Group>                    

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
