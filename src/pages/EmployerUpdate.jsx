import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
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
    phoneNumber: employer.phoneNumber,
    webAddress: employer.webAddress,
    email: employer.email,
    password: employer.password,
  };

  const validationSchema = Yup.object({
    companyName: Yup.string(),
    phoneNumber: Yup.string(),
    webAddress: Yup.string(),
    email: Yup.string().email("Not a Valid Email"),
    password: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log(values);
    employerService.update(values);
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
                    focus
                    placeholder={employer.companyName}
                    onChange={(event, data) => handleChange("companyName", data.value)}
                    value={formik.values.companyName}
                  />
                  {formik.errors.companyName && formik.touched.companyName && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.companyName} /><br /><br /></span>}
                  <Form.Input
                    name="phoneNumber"
                    label="Phone Number"
                    focus
                    placeholder={employer.phoneNumber}
                    onChange={(event, data) => handleChange("phoneNumber", data.value)}
                    value={formik.values.phoneNumber}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.phoneNumber} /><br /><br /></span>}
                  <Form.Input
                    name="webAddress"
                    label="Web Address (The domains of the e-mail and web address must be the same.)"
                    focus
                    placeholder={employer.webAddress}
                    onChange={(event, data) => handleChange("webAddress", data.value)}
                    value={formik.values.webAddress}
                  />
                  {formik.errors.webAddress && formik.touched.webAddress && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.webAddress} /><br /><br /></span>}
                  <Form.Input
                    name="email"
                    label="E-mail"
                    focus
                    placeholder={employer.email}
                    onChange={(event, data) => handleChange("email", data.value)}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.email} /><br /><br /></span>}
                  <Form.Input
                    name="password"
                    label="Password"
                    focus
                    placeholder="* * * * * *"
                    onChange={(event, data) => handleChange("password", data.value)}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.password} /><br /></span>}
                  <br />
                  
                  <Button circular fluid type="submit" color="yellow" content="Update" disabled={!formik.dirty} />
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>

        <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="Waiting for update confirmation !" />
      </Container>
    </div>
  );
}
