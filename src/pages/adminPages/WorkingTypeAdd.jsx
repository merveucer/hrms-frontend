import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../../layouts/Headline";
import WorkingTypeService from "../../services/workingTypeService";
import DateLabel from "./../../layouts/DateLabel";
import MessageModal from "./../../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function WorkingTypeAdd() {
  const [open, setOpen] = useState(false);

  let workingTypeService = new WorkingTypeService();

  const initialValues = {
    type: "",
  };

  const validationSchema = Yup.object({
    type: Yup.string().required("Required Field"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    workingTypeService.add(values);
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
        <Headline content="Add Working Type" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name="type"
                    label="Type"
                    onChange={(event, data) => handleChange("type", data.value)}
                    value={formik.values.type}
                  />
                  {formik.errors.type && formik.touched.type && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.type} /><br /></span>}
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
