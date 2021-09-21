import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../../layouts/Headline";
import WorkingTypeService from "../../services/workingTypeService";
import DateLabel from "./../../layouts/DateLabel";
import MessageModal from "./../../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function WorkingTypeUpdate() {
  const [workingTypes, setWorkingTypes] = useState([]);
  const [open, setOpen] = useState(false);

  let workingTypeService = new WorkingTypeService();

  useEffect(() => {
    workingTypeService.getAll().then((result) => setWorkingTypes(result.data.data));
  }, []);

  const workingTypeOptions = workingTypes.map((workingType) => ({
    key: workingType.id,
    text: workingType.type,
    value: workingType.id,
  }));

  const initialValues = {
    id: "",
    type: "",
  };

  const validationSchema = Yup.object({
    id: Yup.number().required("Required Field"),
    type: Yup.string().required("Required Field"),
  });

  const onSubmit = (values) => {
    console.log(values);
    workingTypeService.update(values);
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
        <Headline content="Update Working Type" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Select
                    name="id"
                    label="Working Type to Update"
                    options={workingTypeOptions}
                    onChange={(event, data) => handleChange("id", data.value)}
                    value={formik.values.id}
                  />
                  {formik.errors.id && formik.touched.id && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.id} /><br /><br /></span>}
                  <Form.Input
                    name="type"
                    label="Type"
                    onChange={(event, data) => handleChange("type", data.value)}
                    value={formik.values.type}
                  />
                  {formik.errors.type && formik.touched.type && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.type} /><br /></span>}
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