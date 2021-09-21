import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../../layouts/Headline";
import CityService from "../../services/cityService";
import DateLabel from "./../../layouts/DateLabel";
import MessageModal from "./../../layouts/MessageModal";
import { Container, Grid, Label, Form, Button } from "semantic-ui-react";

export default function CityUpdate() {
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);

  let cityService = new CityService();

  useEffect(() => {
    cityService.getAll().then((result) => setCities(result.data.data));
  }, []);

  const cityOptions = cities.map((city) => ({
    key: city.id,
    text: city.city,
    value: city.id,
  }));

  const initialValues = {
    id: "",
    city: "",
  };

  const validationSchema = Yup.object({
    id: Yup.number().required("Required Field"),
    city: Yup.string().required("Required Field"),
  });

  const onSubmit = (values) => {
    console.log(values);
    cityService.update(values);
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
        <Headline content="Update City" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <DateLabel value={new Date().toDateString()} />
               
              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Select
                    name="id"
                    label="City to Update"
                    options={cityOptions}
                    onChange={(event, data) => handleChange("id", data.value)}
                    value={formik.values.id}
                  />
                  {formik.errors.id && formik.touched.id && <span><Label basic pointing className="orbitron" color="pink" content={formik.errors.id} /><br/><br /></span>}
                  <Form.Input
                    name="city"
                    label="City"
                    onChange={(event, data) => handleChange("city", data.value)}
                    value={formik.values.city}
                  />
                  {formik.errors.city && formik.touched.city && <span><Label basic pointing className="orbitron" color="pink" content={formik.errors.city} /><br/></span>}
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
