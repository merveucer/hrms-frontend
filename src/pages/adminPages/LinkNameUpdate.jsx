import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../../layouts/Headline";
import LinkNameService from "../../services/linkNameService";
import DateLabel from "./../../layouts/DateLabel";
import MessageModal from "./../../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function LinkNameUpdate() {
  const [linkNames, setLinkNames] = useState([]);
  const [open, setOpen] = useState(false);

  let linkNameService = new LinkNameService();

  useEffect(() => {
    linkNameService.getAll().then((result) => setLinkNames(result.data.data));
  }, []);

  const linkNameOptions = linkNames.map((linkName) => ({
    key: linkName.id,
    text: linkName.name,
    value: linkName.id,
  }));

  const initialValues = {
    id: "",
    name: "",
  };

  const validationSchema = Yup.object({
    id: Yup.number().required("Required Field"),
    name: Yup.string().required("Required Field"),
  });

  const onSubmit = (values) => {
    console.log(values);
    linkNameService.update(values);
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
        <Headline content="Update Link Name" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Select
                    name="id"
                    label="Link Name to Update"
                    options={linkNameOptions}
                    onChange={(event, data) => handleChange("id", data.value)}
                    value={formik.values.id}
                  />
                  {formik.errors.id && formik.touched.id && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.id} /><br /><br /></span>}
                  <Form.Input
                    name="name"
                    label="Link Name"
                    onChange={(event, data) => handleChange("name", data.value)}
                    value={formik.values.name}
                  />
                  {formik.errors.name && formik.touched.name && <span><Label basic pointing color="pink" className="orbitron" content={formik.errors.name} /><br /></span>}
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
