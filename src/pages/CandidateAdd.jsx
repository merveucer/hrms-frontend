import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import AuthService from "./../services/authService";
import DateLabel from "./../layouts/DateLabel";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

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
    firstName: Yup.string().required("Required Field"),
    lastName: Yup.string().required("Required Field"),
    identityNumber: Yup.string().length(11 ,"Not 11 Characters in Length").required("Required Field"),
    dateOfBirth: Yup.date().required("Required Field"),
    email: Yup.string().email("Not a Valid Email").required("Required Field"),
    password: Yup.string().required("Required Field"),
    confirmPassword: Yup.string().required("Required Field"),
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
                  <Form.Input
                    name="firstName"
                    label="First Name"
                    onChange={(event, data) => handleChange("firstName", data.value)}
                    value={formik.values.firstName}
                  />
                  {formik.errors.firstName && formik.touched.firstName && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.firstName} /><br /><br /></span>}
                  <Form.Input
                    name="lastName"
                    label="Last Name"
                    onChange={(event, data) => handleChange("lastName", data.value)}
                    value={formik.values.lastName}
                  />
                  {formik.errors.lastName && formik.touched.lastName && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.lastName} /><br /><br /></span>}
                  <Form.Group widths="equal">
                    <Form.Input
                      name="identityNumber"
                      label="Identity Number"
                      placeholder="XXXXXXXXXXX"
                      onChange={(event, data) => handleChange("identityNumber", data.value)}
                      value={formik.values.identityNumber}
                    />
                    <Form.Input
                      name="dateOfBirth"
                      label="Date of Birth"
                      placeholder="YYYY-MM-DD"
                      onChange={(event, data) => handleChange("dateOfBirth", data.value)}
                      value={formik.values.dateOfBirth}
                    />
                  </Form.Group>
                  <Grid>
                    <Grid.Row columns="equal">
                      <Grid.Column>
                        {formik.errors.identityNumber && formik.touched.identityNumber && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.identityNumber} /><br /><br /></span>}
                      </Grid.Column>
                      <Grid.Column>
                        {formik.errors.dateOfBirth && formik.touched.dateOfBirth && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.dateOfBirth} /><br /><br /></span>}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Form.Input
                    name="email"
                    label="E-mail"
                    placeholder="example@example.com"
                    onChange={(event, data) => handleChange("email", data.value)}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.email} /><br /><br /></span>}
                  <Form.Input
                    name="password"
                    label="Password"
                    onChange={(event, data) => handleChange("password", data.value)}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.password} /><br /><br /></span>}
                  <Form.Input
                    name="confirmPassword"
                    label="Confirm Password"
                    onChange={(event, data) => handleChange("confirmPassword", data.value)}
                    value={formik.values.confirmPassword}
                  />
                  {formik.errors.confirmPassword && formik.touched.confirmPassword && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.confirmPassword} /><br /></span>}
                  <br />
                  
                  <Button circular fluid type="submit" color="yellow" content="Sign up" />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="An activation e-mail has been sent !" />
      </Container>
    </div>
  );
}
