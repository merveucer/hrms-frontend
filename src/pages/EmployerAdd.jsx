import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import AuthService from "./../services/authService";
import DateLabel from "./../layouts/DateLabel";
import { Container, Header, Grid, Label, Form, Button, Modal, Icon } from "semantic-ui-react";

export default function EmployerAdd() {
  const [open, setOpen] = useState(false);

  let authService = new AuthService();

  const initialValues = {
    companyName: "",
    phoneNumber: "",
    webAddress: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    companyName: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    webAddress: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    authService.registerEmployer(values);
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
        <Headline content="Employer Sign up" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Field>
                    <Form.Input
                      name="companyName"
                      placeholder="Company Name"
                      onChange={(event, data) => handleChange("companyName", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.companyName}
                    />
                    {formik.errors.companyName && formik.touched.companyName 
                    ? (<Label basic pointing color="pink" content={formik.errors.companyName} />)
                    : null}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      name="phoneNumber"
                      placeholder="Phone Number"
                      onChange={(event, data) => handleChange("phoneNumber", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.phoneNumber}
                    />
                    {formik.errors.phoneNumber && formik.touched.phoneNumber
                    ? (<Label basic pointing color="pink" content={formik.errors.phoneNumber} />)
                    : null}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      name="webAddress"
                      label="Web Address (The domains of the e-mail and web address must be the same.)"
                      placeholder="example.com"
                      onChange={(event, data) => handleChange("webAddress", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.webAddress}
                    />
                    {formik.errors.webAddress && formik.touched.webAddress
                    ? (<Label basic pointing color="pink" content={formik.errors.webAddress} />)
                    : null}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      name="email"
                      label="E-mail"
                      placeholder="example@example.com"
                      onChange={(event, data) => handleChange("email", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email
                    ? (<Label basic pointing color="pink" content={formik.errors.email} />)
                    : null}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      name="password"
                      placeholder="Password"
                      onChange={(event, data) => handleChange("password", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.password}
                    />
                    {formik.errors.password && formik.touched.password
                    ? (<Label basic pointing color="pink" content={formik.errors.password} />)
                    : null}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={(event, data) => handleChange("confirmPassword", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.confirmPassword}
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword
                    ? (<Label basic pointing color="pink" content={formik.errors.confirmPassword} />)
                    : null}
                  </Form.Field>

                  <Button circular fluid type="submit" color="yellow" content="Sign up" />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <Modal
          basic
          dimmer
          onClose={() => handleModal(false)}
          onOpen={() => handleModal(true)}
          open={open}
          size="small"
        >
          <Header icon as="h2" className="orbitron">
            <Icon name="check circle outline" />
            An activation e-mail has been sent !
          </Header>
        </Modal>
      </Container>
    </div>
  );
}
