import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../../layouts/Headline";
import WorkingTimeService from "../../services/workingTimeService";
import DateLabel from "./../../layouts/DateLabel";
import MessageModal from "./../../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function WorkingTimeUpdate() {
  const [workingTimes, setWorkingTimes] = useState([]);
  const [open, setOpen] = useState(false);

  let workingTimeService = new WorkingTimeService();

  useEffect(() => {
    workingTimeService.getAll().then((result) => setWorkingTimes(result.data.data));
  }, []);

  const workingTimeOptions = workingTimes.map((workingTime) => ({
    key: workingTime.id,
    text: workingTime.time,
    value: workingTime.id,
  }));

  const initialValues = {
    id: "",
    time: "",
  };

  const validationSchema = Yup.object({
    id: Yup.number().required("Required Field"),
    time: Yup.string().required("Required Field"),
  });

  const onSubmit = (values) => {
    console.log(values);
    workingTimeService.update(values);
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
        <Headline content="Update Working Time" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Select
                    name="id"
                    label="Working Time to Update"
                    options={workingTimeOptions}
                    onChange={(event, data) => handleChange("id", data.value)}
                    value={formik.values.id}
                  />
                  {formik.errors.id && formik.touched.id && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.id} /><br /><br /></span>}
                  <Form.Input
                    name="time"
                    label="Working Time"
                    onChange={(event, data) => handleChange("time", data.value)}
                    value={formik.values.time}
                  />
                  {formik.errors.time && formik.touched.time && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.time} /><br /></span>}
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
