import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import JobPostingService from "../services/jobPostingService";
import JobTitleService from "../services/jobTitleService";
import CityService from "../services/cityService";
import WorkingTimeService from "../services/workingTimeService";
import WorkingTypeService from "../services/workingTypeService";
import EmployerService from "../services/employerService";
import DateLabel from "./../layouts/DateLabel";
import MessageModal from "./../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function EmployerUpdate() {
  let { id } = useParams();

  const [employer, setEmployer] = useState({});
  const [open, setOpen] = useState(false);

  let employerService = new EmployerService();

  useEffect(() => {
    employerService.getById(id).then((result) => setEmployer(result.data.data));
  }, []);

  const initialValues = {
    id: id,
    companyName: employer.companyName,
    email: employer.email,
    password: employer.password,
    phoneNumber: employer.phoneNumber,
    webAddress: employer.webAddress,
  };

  const validationSchema = Yup.object({
    companyName: Yup.string(),
    phoneNumber: Yup.string(),
    webAddress: Yup.string(),
    email: Yup.string(),
    password: Yup.string(),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    employerService.update(values);
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
        <Headline content="Update Employer" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name="companyName"
                    label="Company Name"
                    placeholder={employer.companyName}
                    onChange={(event, data) => handleChange("companyName", data.value)}
                    onBlur={formik.onBlur}
                    value={formik.values.companyName}
                  />
                  {formik.errors.companyName && formik.touched.companyName 
                  ? (<Label basic pointing color="pink" content={formik.errors.companyName} />)
                  : null}
                  <Form.Input
                    name="phoneNumber"
                    label="Phone Number"
                    placeholder={employer.phoneNumber}
                    onChange={(event, data) => handleChange("phoneNumber", data.value)}
                    onBlur={formik.onBlur}
                    value={formik.values.phoneNumber}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? (<Label basic pointing color="pink" content={formik.errors.phoneNumber} />)
                  : null}
                  <Form.Input
                    name="webAddress"
                    label="Web Address (The domains of the e-mail and web address must be the same.)"
                    placeholder={employer.webAddress}
                    onChange={(event, data) => handleChange("webAddress", data.value)}
                    onBlur={formik.onBlur}
                    value={formik.values.webAddress}
                  />
                  {formik.errors.webAddress && formik.touched.webAddress
                  ? (<Label basic pointing color="pink" content={formik.errors.webAddress} />)
                  : null}
                  <Form.Input
                    name="email"
                    label="E-mail"
                    placeholder={employer.email}
                    onChange={(event, data) => handleChange("email", data.value)}
                    onBlur={formik.onBlur}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email
                  ? (<Label basic pointing color="pink" content={formik.errors.email} />)
                  : null}
                  <Form.Input
                    name="password"
                    label="Password"
                    placeholder={employer.password}
                    onChange={(event, data) => handleChange("password", data.value)}
                    onBlur={formik.onBlur}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password
                  ? (<Label basic pointing color="pink" content={formik.errors.password} />)
                  : null}

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
