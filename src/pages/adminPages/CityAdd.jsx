import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../../layouts/Headline";
import CityService from "../../services/cityService";
import DateLabel from "./../../layouts/DateLabel";
import MessageModal from "./../../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function CityAdd() {
  const [open, setOpen] = useState(false);

  let cityService = new CityService();

  const initialValues = {
    city: "",
  };

  const validationSchema = Yup.object({
    city: Yup.string().required("Required Field"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    cityService.add(values);
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
        <Headline content="Add City" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name="city"
                    label="City"
                    onChange={(event, data) => handleChange("city", data.value)}
                    value={formik.values.city}
                  />
                  {formik.errors.city && formik.touched.city && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.city} /><br /></span>}
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
