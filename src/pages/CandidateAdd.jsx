import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import AuthService from "./../services/authService";
import DateLabel from "./../layouts/DateLabel";
import { Container, Header, Grid, Label, Form, Button, Modal, Icon } from "semantic-ui-react";

export default function CandidateAdd() {
  const [open, setOpen] = useState(false);

  let authService = new AuthService();

  const initialValues = {
    firstName: "",
    lastName: "",
    identityNumber: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    identityNumber: Yup.string().required(),
    dateOfBirth: Yup.date().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    authService.registerCandidate(values);
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
        <Headline content="Candidate Sign up" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Field>
                    <Form.Input
                      name="firstName"
                      placeholder="First Name"
                      onChange={(event, data) => handleChange("firstName", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.firstName}
                    />
                    {formik.errors.firstName && formik.touched.firstName 
                    ? (<Label basic pointing color="pink" content={formik.errors.firstName} />)
                    : null}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      name="lastName"
                      placeholder="Last Name"
                      onChange={(event, data) => handleChange("lastName", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.lastName}
                    />
                    {formik.errors.lastName && formik.touched.lastName
                    ? (<Label basic pointing color="pink" content={formik.errors.lastName} />)
                    : null}
                  </Form.Field>
                  <Form.Group widths="equal">
                    <Form.Field>
                      <Form.Input
                        name="identityNumber"
                        label="Identity Number"
                        placeholder="XXXXXXXXXXX"
                        onChange={(event, data) => handleChange("identityNumber", data.value)}
                        onBlur={formik.onBlur}
                        value={formik.values.identityNumber}
                      />
                      {formik.errors.identityNumber && formik.touched.identityNumber
                      ? (<Label basic pointing color="pink" content={formik.errors.identityNumber} />)
                      : null}
                    </Form.Field>
                    <Form.Field>
                      <Form.Input
                        name="dateOfBirth"
                        label="Date of Birth"
                        placeholder="YYYY-MM-DD"
                        onChange={(event, data) => handleChange("dateOfBirth", data.value)}
                        onBlur={formik.onBlur}
                        value={formik.values.dateOfBirth}
                      />
                      {formik.errors.dateOfBirth && formik.touched.dateOfBirth
                      ? (<Label basic pointing color="pink" content={formik.errors.dateOfBirth} />)
                      : null}
                    </Form.Field>
                  </Form.Group>

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
