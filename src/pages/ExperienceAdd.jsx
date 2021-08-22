import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import ExperienceService from "./../services/experienceService";
import JobTitleService from './../services/jobTitleService';
import ResumeService from './../services/resumeService';
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Form, Label, Button } from "semantic-ui-react";

export default function ExperienceAdd() {
  let { id } = useParams();

  const [jobTitles, setJobTitles] = useState([]);
  const [open, setOpen] = useState(false);

  let experienceService = new ExperienceService();
  let jobTitleService = new JobTitleService();
  let resumeService = new ResumeService();

  useEffect(() => {
    jobTitleService.getAll().then((result) => setJobTitles(result.data.data));
  }, []);

  const jobTitleOptions = jobTitles.map((jobTitle) => ({
    key: jobTitle.id,
    text: jobTitle.title,
    value: jobTitle,
  }));

  const initialValues = {
    resume: {id: id},
    companyName: "",
    jobTitle: "",
    startingDate: "",
    terminationDate: "",
  };

  const validationSchema = Yup.object({
    resume: Yup.object().required(),
    companyName: Yup.string().required(),
    jobTitle: Yup.object().required(),
    startingDate: Yup.date().required(),
    terminationDate: Yup.date(),
  });

  const onSubmit = (values, { resetForm }) => {
    experienceService.add(values);
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
        <Headline content="Add Experience" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name="companyName"
                    label="Company Name"
                    onChange={(event, data) => handleChange("companyName", data.value)}
                    onBlur={formik.onBlur}
                    value={formik.values.companyName}
                  />
                  {formik.errors.companyName && formik.touched.companyName
                  ? (<Label basic pointing color="pink" content={formik.errors.companyName} />)
                  : null}
                  <Form.Select
                    name="jobTitle"
                    label="Job Title"
                    options={jobTitleOptions}
                    onChange={(event, data) => handleChange("jobTitle", data.value)}
                    onBlur={formik.onBlur}
                    value={formik.values.jobTitle}
                  />
                  {formik.errors.jobTitle && formik.touched.jobTitle
                  ? (<Label basic pointing color="pink" content={formik.errors.jobTitle} />)
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
                      name="terminationDate"
                      label="Termination Date (Optional)"
                      placeholder="YYYY-MM-DD"
                      onChange={(event, data) => handleChange("terminationDate", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.terminationDate}
                    />
                    {formik.errors.terminationDate && formik.touched.terminationDate
                    ? (<Label basic pointing color="pink" content={formik.errors.terminationDate} />)
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
