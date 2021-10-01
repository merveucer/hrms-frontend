import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "../layouts/Headline";
import DateLabel from "./../layouts/DateLabel";
import LanguageLevelService from "./../services/languageLevelService";
import LanguageService from "./../services/languageService";
import LevelService from "./../services/levelService";
import ResumeService from "./../services/resumeService";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Form, Label, Button } from "semantic-ui-react";

export default function LanguageLevelAdd() {
  let { id } = useParams();

  const [languages, setLanguages] = useState([]);
  const [levels, setLevels] = useState([]);
  const [open, setOpen] = useState(false);

  let languageLevelService = new LanguageLevelService();
  let languageService =  new LanguageService();
  let levelService = new LevelService();
  let resumeService = new ResumeService();

  useEffect(() => {
    languageService.getAll().then((result) => setLanguages(result.data.data));
    levelService.getAll().then((result) => setLevels(result.data.data));
  }, []);

  const languageOptions = languages.map((language) => ({
    key: language.id,
    text: language.language,
    value: language,
  }));

  const levelOptions = levels.map((level) => ({
    key: level.id,
    text: level.level,
    value: level,
  }));

  const initialValues = {
    resume: {id: id},
    language: "",
    level: "",
  };

  const validationSchema = Yup.object({
    language: Yup.object().required("Required Field"),
    level: Yup.object().required("Required Field"),
  });

  const onSubmit = (values, { resetForm }) => {
    languageLevelService.add(values);
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
        <Headline content="Add Language" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Select
                    name="language"
                    label="Language"
                    options={languageOptions}
                    onChange={(event, data) => handleChange("language", data.value)}
                    value={formik.values.language}
                  />
                  {formik.errors.language && formik.touched.language && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.language} /><br /><br /></span>}
                  <Form.Select
                    name="level"
                    label="Level"
                    options={levelOptions}
                    onChange={(event, data) => handleChange("level", data.value)}
                    value={formik.values.level}
                  />
                  {formik.errors.language && formik.touched.language && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.language} /><br /></span>}
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
