import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import JobPostingService from "../services/jobPostingService";
import JobTitleService from "../services/jobTitleService";
import CityService from "../services/cityService";
import WorkingTimeService from "../services/workingTimeService";
import WorkingTypeService from "../services/workingTypeService";
import EmployerService from "../services/employerService";
import { Container, Header, Grid, Label, Form, Button, Modal, Icon } from "semantic-ui-react";

export default function JobPostingAdd() {
  const [employers, setEmployers] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [cities, setCities] = useState([]);
  const [workingTimes, setWorkingTimes] = useState([]);
  const [workingTypes, setWorkingTypes] = useState([]);

  const [open, setOpen] = React.useState(false);

  let jobPostingService = new JobPostingService();
  let employerService = new EmployerService();
  let jobTitleService = new JobTitleService();
  let cityService = new CityService();
  let workingTimeService = new WorkingTimeService();
  let workingTypeService = new WorkingTypeService();

  useEffect(() => {
    employerService.getAllByIsActivatedAndIsConfirmed(true, true).then((result) => setEmployers(result.data.data));
    jobTitleService.getAll().then((result) => setJobTitles(result.data.data));
    cityService.getAll().then((result) => setCities(result.data.data));
    workingTimeService.getAll().then((result) => setWorkingTimes(result.data.data));
    workingTypeService.getAll().then((result) => setWorkingTypes(result.data.data));
  }, []);

  const employerOptions = employers.map((employer) => ({
    key: employer.id,
    text: employer.companyName,
    value: employer,
  }));

  const jobTitleOptions = jobTitles.map((jobTitle) => ({
    key: jobTitle.id,
    text: jobTitle.title,
    value: jobTitle,
  }));

  const cityOptions = cities.map((city) => ({
    key: city.id,
    text: city.city,
    value: city,
  }));

  const workingTimeOptions = workingTimes.map((workingTime) => ({
    key: workingTime.id,
    text: workingTime.time,
    value: workingTime,
  }));

  const workingTypeOptions = workingTypes.map((workingType) => ({
    key: workingType.id,
    text: workingType.type,
    value: workingType,
  }));

  const initialValues = {
    employer: "",
    jobTitle: "",
    city: "",
    workingTime: "",
    workingType: "",
    jobDescription: "",
    numberOfOpenPositions: "",
    salaryMin: "",
    salaryMax: "",
    closingDate: "",
  };

  const validationSchema = Yup.object({
    employer: Yup.object().required(),
    jobTitle: Yup.object().required(),
    city: Yup.object().required(),
    workingTime: Yup.object().required(),
    workingType: Yup.object().required(),
    jobDescription: Yup.string().required(),
    numberOfOpenPositions: Yup.number().required(),
    salaryMin: Yup.string(),
    salaryMax: Yup.string(),
    closingDate: Yup.date().required(),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    jobPostingService.add(values);
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
        <Headline content="Add Job Posting" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <span className="detail-date">
                <Label circular basic color="pink">
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width="1" />
                      <Grid.Column width="12">
                        <span className="orbitron">
                          {new Date().toDateString()}
                        </span>
                      </Grid.Column>
                      <Grid.Column width="1" />
                    </Grid.Row>
                  </Grid>
                </Label>
              </span>

              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Field>
                    <Form.Select
                      name="employer"
                      placeholder="Employer"
                      options={employerOptions}
                      onChange={(event, data) => handleChange("employer", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.employer}
                    />
                    {formik.errors.employer && formik.touched.employer
                    ? (<Label basic pointing color="pink" content={formik.errors.employer} />)
                    : null}
                  </Form.Field>
                  <Form.Group widths="equal">
                    <Form.Field>
                      <Form.Select
                        name="jobTitle"
                        placeholder="Job Title"
                        options={jobTitleOptions}
                        onChange={(event, data) => handleChange("jobTitle", data.value)}
                        onBlur={formik.onBlur}
                        value={formik.values.jobTitle}
                      />
                      {formik.errors.jobTitle && formik.touched.jobTitle
                      ? (<Label basic pointing color="pink" content={formik.errors.jobTitle} />)
                      : null}
                    </Form.Field>
                    <Form.Field>
                      <Form.Select
                        name="city"
                        placeholder="City"
                        options={cityOptions}
                        onChange={(event, data) =>handleChange("city", data.value)}
                        onBlur={formik.onBlur}
                        value={formik.values.city}
                      />
                      {formik.errors.city && formik.touched.city
                      ? (<Label basic pointing color="pink" content={formik.errors.city} />)
                      : null}
                    </Form.Field>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Field>
                      <Form.Select
                        name="workingTime"
                        placeholder="Working Time"
                        options={workingTimeOptions}
                        onChange={(event, data) => handleChange("workingTime", data.value)}
                        onBlur={formik.onBlur}
                        value={formik.values.workingTime}
                      />
                      {formik.errors.workingTime && formik.touched.workingTime
                      ? (<Label basic pointing color="pink" content={formik.errors.workingTime} />)
                      : null}
                    </Form.Field>
                    <Form.Field>
                      <Form.Select
                        name="workingType"
                        placeholder="Working Type"
                        options={workingTypeOptions}
                        onChange={(event, data) => handleChange("workingType", data.value)}
                        onBlur={formik.onBlur}
                        value={formik.values.workingType}
                      />
                      {formik.errors.workingType && formik.touched.workingType
                      ? (<Label basic pointing color="pink" content={formik.errors.workingType} />)
                      : null}
                    </Form.Field>
                  </Form.Group>
                  <Form.Field>
                    <Form.TextArea
                      name="jobDescription"
                      placeholder="Write the job description..."
                      onChange={(event, data) => handleChange("jobDescription", data.value)}
                      onBlur={formik.onBlur}
                      value={formik.values.jobDescription}
                    />
                    {formik.errors.jobDescription && formik.touched.jobDescription
                    ? (<Label basic pointing color="pink" content={formik.errors.jobDescription} />)
                    : null}
                  </Form.Field>
                  <Form.Group widths="equal">
                    <Form.Field>
                      <Form.Input
                        name="numberOfOpenPositions"
                        label="Number of Open Positions"
                        placeholder="1"
                        onChange={(event, data) => handleChange("numberOfOpenPositions", data.value)}
                        onBlur={formik.onBlur}
                        value={formik.values.numberOfOpenPositions}
                      />
                      {formik.errors.numberOfOpenPositions && formik.touched.numberOfOpenPositions
                      ? (<Label basic pointing color="pink" content={formik.errors.numberOfOpenPositions} />)
                      : null}
                    </Form.Field>
                    <Form.Field>
                      <Form.Input
                        name="closingDate"
                        label="Closing Date"
                        placeholder="YYYY-MM-DD"
                        onChange={(event, data) => handleChange("closingDate", data.value)}
                        onBlur={formik.onBlur}
                        value={formik.values.closingDate}
                      />
                      {formik.errors.closingDate && formik.touched.closingDate
                      ? (<Label basic pointing color="pink" content={formik.errors.closingDate} />)
                      : null}
                    </Form.Field>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Field>
                      <Form.Input
                        name="salaryMin"
                        label="Salary Min (Optional)"
                        placeholder="5000 ₺"
                        onChange={(event, data) => handleChange("salaryMin", data.value)}
                        onBlur={formik.onBlur}
                        value={formik.values.salaryMin}
                      />
                      {formik.errors.salaryMin && formik.touched.salaryMin
                      ? (<Label basic pointing color="pink" content={formik.errors.salaryMin} />)
                      : null}
                    </Form.Field>
                    <Form.Field>
                      <Form.Input
                        name="salaryMax"
                        label="Salary Max (Optional)"
                        placeholder="10000 ₺"
                        onChange={(event, data) => handleChange("salaryMax", data.value)}
                        onBlur={formik.onBlur}
                        value={formik.values.salaryMax}
                      />
                      {formik.errors.salaryMax && formik.touched.salaryMax
                      ? (<Label basic pointing color="pink" content={formik.errors.salaryMax} />)
                      : null}
                    </Form.Field>
                  </Form.Group>

                  <Button circular fluid type="submit" color="yellow" content="Add" />
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
          <Header icon>
            <Icon name="check circle outline" />
            Added and awaiting confirmation !!!
          </Header>
        </Modal>
      </Container>
    </div>
  );
}
