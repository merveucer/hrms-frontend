import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../../layouts/Headline";
import AuthService from "./../../services/authService";
import DateLabel from "./../../layouts/DateLabel";
import MessageModal from "./../../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function CompanyStaffAdd() {
  const [open, setOpen] = useState(false);

  let authService = new AuthService();

  const initialValues = {    
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    authService.registerCompanyStaff(values);
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
        <Headline content="Company Staff Sign Up" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name="firstName"
                    label="First Name"
                    onChange={(event, data) => handleChange("firstName", data.value)}
                    value={formik.values.firstName}
                  />
                  {formik.errors.firstName && formik.touched.firstName && <Label basic pointing color="pink" content={formik.errors.firstName} />}
                  <Form.Input
                    name="lastName"
                    label="Last Name"
                    onChange={(event, data) => handleChange("lastName", data.value)}
                    value={formik.values.lastName}
                  />
                  {formik.errors.firstName && formik.touched.firstName && <Label basic pointing color="pink" content={formik.errors.firstName} />}
                  <Form.Input
                    name="email"
                    label="Email"
                    placeholder="example@example.com"
                    onChange={(event, data) => handleChange("email", data.value)}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && <Label basic pointing color="pink" content={formik.errors.email} />}
                  <Form.Input
                    name="password"
                    label="Password"
                    onChange={(event, data) => handleChange("password", data.value)}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password && <Label basic pointing color="pink" content={formik.errors.password} />}
                  <br />
                  
                  <Button circular fluid type="submit" color="yellow" content="Sign up" />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="Signed up !" />
      </Container>      
    </div>
  );
}
