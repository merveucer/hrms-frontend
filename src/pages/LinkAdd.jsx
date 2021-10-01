import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import LinkService from "./../services/linkService";
import LinkNameService from "./../services/linkNameService";
import ResumeService from "./../services/resumeService";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Form, Label, Button } from "semantic-ui-react";

export default function LinkAdd() {
  let { id } = useParams();

  const [linkNames, setLinkNames] = useState([]);
  const [open, setOpen] = useState(false);

  let linkService = new LinkService();
  let linkNameService = new LinkNameService();
  let resumeService = new ResumeService();

  useEffect(() => {
    linkNameService.getAll().then((result) => setLinkNames(result.data.data));
  }, []);

  const linkNameOptions = linkNames.map((linkName) => ({
    key: linkName.id,
    text: linkName.name,
    value: linkName,
  }));

  const initialValues = {
    resume: {id: id},
    linkName: "",
    url: "",
  };

  const validationSchema = Yup.object({
    linkName: Yup.object().required("Required Field"),
    url: Yup.string().required("Required Field"),
  });

  const onSubmit = (values, { resetForm }) => {
    linkService.add(values);
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
        <Headline content="Add Link" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Select
                    name="linkName"
                    label="Link Name"                     
                    options={linkNameOptions}
                    onChange={(event, data) => handleChange("linkName", data.value)}
                    value={formik.values.linkName}
                  />
                  {formik.errors.linkName && formik.touched.linkName && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.linkName} /><br /><br /></span>}
                  <Form.Input
                    name="url"
                    label="Url"
                    onChange={(event, data) => handleChange("url", data.value)}
                    value={formik.values.url}
                  />
                  {formik.errors.url && formik.touched.url && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.url} /><br /></span>}
                  <br />
                  
                  <Button circular fluid type="submit" color="yellow" content={"Add"} />
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
