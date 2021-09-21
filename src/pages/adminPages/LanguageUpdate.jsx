import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../../layouts/Headline";
import LanguageService from "../../services/languageService";
import DateLabel from "./../../layouts/DateLabel";
import MessageModal from "./../../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function LanguageUpdate() {
  const [languages, setLanguages] = useState([]);
  const [open, setOpen] = useState(false);

  let languageService = new LanguageService();

  useEffect(() => {
    languageService.getAll().then((result) => setLanguages(result.data.data));
  }, []);

  const languageOptions = languages.map((language) => ({
    key: language.id,
    text: language.language,
    value: language.id,
  }));

  const initialValues = {
    id: "",
    language: "",
  };

  const validationSchema = Yup.object({
    id: Yup.number().required("Required Field"),
    language: Yup.string().required("Required Field"),
  });

  const onSubmit = (values) => {
    console.log(values);
    languageService.update(values);
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
        <Headline content="Update Language" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Select 
                    name="id" label="Language to Update"
                    options={languageOptions}
                    onChange={(event, data) => handleChange("id", data.value)}
                    value={formik.values.id}
                  />
                  {formik.errors.id && formik.touched.id && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.id} /><br /><br /></span>}
                  <Form.Input
                    name="language"
                    label="Language"
                    onChange={(event, data) => handleChange("language", data.value)}
                    value={formik.values.language}
                  />
                  {formik.errors.language && formik.touched.language && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.language} /><br /></span>}
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
