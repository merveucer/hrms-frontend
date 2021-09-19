import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../../layouts/Headline";
import CompanyStaffService from "./../../services/companyStaffService";
import DateLabel from "./../../layouts/DateLabel";
import MessageModal from "./../../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function CompanyStaffUpdate() {
  const [companyStaff, setCompanyStaff] = useState({});
  const [open, setOpen] = useState(false);

  let companyStaffService = new CompanyStaffService();

  let id = 1; // TODO: companyStaffId

  useEffect(() => {
    companyStaffService.getById(id).then((result) => setCompanyStaff(result.data.data)); 
  }, []);

  const initialValues = {
    id: id,
    email: companyStaff.email,
    firstName: companyStaff.firstName,
    lastName: companyStaff.lastName,
    password: companyStaff.password,
  };

  const validationSchema = Yup.object({
    email: Yup.string(),
    firstName: Yup.string(),
    lastName: Yup.string(),
    password: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log(values);
    companyStaffService.update(values);
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
        <Headline content="Update Company Staff" />

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
                    placeholder={companyStaff.firstName}
                    onChange={(event, data) => handleChange("firstName", data.value)}
                    value={formik.values.firstName}
                  />
                  {formik.errors.firstName && formik.touched.firstName && <Label basic pointing color="pink" content={formik.errors.firstName} />}
                  <Form.Input
                    name="lastName"
                    label="Last Name"
                    placeholder={companyStaff.lastName}
                    onChange={(event, data) => handleChange("lastName", data.value)}
                    value={formik.values.lastName}
                  />
                  {formik.errors.firstName && formik.touched.firstName && <Label basic pointing color="pink" content={formik.errors.firstName} />}
                  <Form.Input
                    name="email"
                    label="Email"
                    placeholder={companyStaff.email}
                    onChange={(event, data) => handleChange("email", data.value)}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && <Label basic pointing color="pink" content={formik.errors.email} />}
                  <Form.Input
                    name="password"
                    label="Password"
                    placeholder="* * * * * *"
                    onChange={(event, data) => handleChange("password", data.value)}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password && <Label basic pointing color="pink" content={formik.errors.password} />}
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
