import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../../layouts/Headline";
import LevelService from "../../services/levelService";
import DateLabel from "./../../layouts/DateLabel";
import MessageModal from "./../../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function LevelUpdate() {
  const [levels, setLevels] = useState([]);
  const [open, setOpen] = useState(false);

  let levelService = new LevelService();

  useEffect(() => {
    levelService.getAll().then((result) => setLevels(result.data.data));
  }, []);

  const levelOptions = levels.map((level) => ({
    key: level.id,
    text: level.level,
    value: level.id,
  }));

  const initialValues = {
    id: "",
    level: "",
  };

  const validationSchema = Yup.object({
    id: Yup.number().required("Required Field"),
    level: Yup.string().required("Required Field"),
  });

  const onSubmit = (values) => {
    console.log(values);
    levelService.update(values);
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
        <Headline content="Update Level" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Select
                    name="id"
                    label="Level to Update"
                    options={levelOptions}
                    onChange={(event, data) => handleChange("id", data.value)}
                    value={formik.values.id}
                  />
                  {formik.errors.id && formik.touched.id && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.id} /><br /><br /></span>}
                  <Form.Input
                    name="level"
                    label="Level"
                    onChange={(event, data) => handleChange("level", data.value)}
                    value={formik.values.level}
                  />
                  {formik.errors.level && formik.touched.level && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.level} /><br /></span>}
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
