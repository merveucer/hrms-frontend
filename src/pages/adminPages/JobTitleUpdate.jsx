import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../../layouts/Headline";
import JobTitleService from "../../services/jobTitleService";
import DateLabel from "./../../layouts/DateLabel";
import MessageModal from "./../../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function JobTitleUpdate() {
  const [jobTitles, setJobTitles] = useState([]);
  const [open, setOpen] = useState(false);

  let jobTitleService = new JobTitleService();

  useEffect(() => {
    jobTitleService.getAll().then((result) => setJobTitles(result.data.data));
  }, []);

  const jobTitleOptions = jobTitles.map((jobTitle) => ({
    key: jobTitle.id,
    text: jobTitle.title,
    value: jobTitle.id,
  }));

  const initialValues = {
    id: "",
    title: "",
  };

  const validationSchema = Yup.object({
    id: Yup.number().required("Required Field"),
    title: Yup.string().required("Required Field"),
  });

  const onSubmit = (values) => {
    console.log(values);
    jobTitleService.update(values);
    handleModal(true);
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
        <Headline content="Update Job Title" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Select
                    name="id"
                    label="Job Title to Update"
                    options={jobTitleOptions}
                    onChange={(event, data) => handleChange("id", data.value)}
                    value={formik.values.id}
                  />
                  {formik.errors.id && formik.touched.id && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.id} /><br /><br /></span>}
                  <Form.Input
                    name="title"
                    label="Job Title"
                    onChange={(event, data) => handleChange("title", data.value)}
                    value={formik.values.title}
                  />
                  {formik.errors.title && formik.touched.title && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.title} /><br /></span>}
                  <br />
                  
                  <Button circular fluid type="submit" color="yellow" content="Update" />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="Updated !" />
      </Container>
    </div>
  );
}
