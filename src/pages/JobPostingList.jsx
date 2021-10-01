import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import JobPostingService from "./../services/jobPostingService";
import FavoriteJobPostingService from "./../services/favoriteJobPostingService";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";
import WorkingTimeService from "../services/workingTimeService";
import WorkingTypeService from "../services/workingTypeService";
import ButtonsOfPagination from "../layouts/ButtonsOfPagination";
import { Card, Label, Button, Icon, Grid, Form } from "semantic-ui-react";

export default function JobPostingList({ type, itemsPerRow, id }) {
  const [jobPostings, setJobPostings] = useState([]);
  const [favoriteJobPostings, setFavoriteJobPostings] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [workingTimes, setWorkingTimes] = useState([]);
  const [workingTypes, setWorkingTypes] = useState([]);

  const [cityId, setCityId] = useState(0);
  const [jobTitleId, setJobTitleId] = useState(0);
  const [workingTimeId, setWorkingTimeId] = useState(0);
  const [workingTypeId, setWorkingTypeId] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [numberOfData, setNumberOfData] = useState(0);

  let jobPostingService = new JobPostingService();
  let favoriteJobPostingService = new FavoriteJobPostingService();
  let cityService = new CityService();
  let jobTitleService = new JobTitleService();
  let workingTimeService = new WorkingTimeService();
  let workingTypeService = new WorkingTypeService();

  let totalNumberOfPages = Math.ceil(numberOfData === 0 ? 1 : numberOfData/pageSize);

  useEffect(() => {
    if (type === "filtered") {
      jobPostingService.getAllActiveOnesByPageFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType(cityId, jobTitleId, workingTimeId, workingTypeId, pageNo, pageSize).then((result) => setJobPostings(result.data.data));
      jobPostingService.getAllActiveOnesFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType(cityId, jobTitleId, workingTimeId, workingTypeId).then((result) => setNumberOfData(result.data.data.length));
      cityService.getAll().then((result) => setCities(result.data.data));
      jobTitleService.getAll().then((result) => setJobTitles(result.data.data));
      workingTimeService.getAll().then((result) => setWorkingTimes(result.data.data));
      workingTypeService.getAll().then((result) => setWorkingTypes(result.data.data));
    } else if (type === "recently") {
      jobPostingService.getAllActiveOnesSortedByPostingDateTop6().then((result) => setJobPostings(result.data.data));
    } else if (type === "favorites") {
      favoriteJobPostingService.getAllActiveJobPostingsByCandidateIdSortedByDateOfAddToFavorites(id).then((result) => setJobPostings(result.data.data));
      favoriteJobPostingService.getAllByCandidateId(id).then((result) => setFavoriteJobPostings(result.data.data));
    } else if (type === "byEmployer") {
      jobPostingService.getAllActiveOnesByEmployerIdSortedByPostingDate(id).then((result) => setJobPostings(result.data.data));
    }

  }, [pageNo, pageSize, numberOfData]);

  const cityOptions = [{value: 0, text: "City"}];
  cities.map((city) => (cityOptions.push({
    key: city.id,
    text: city.city,
    value: city.id,
  })));  

  const jobTitleOptions = [{value: 0, text: "Job Title"}];
  jobTitles.map((jobTitle) => (jobTitleOptions.push({
    key: jobTitle.id,
    text: jobTitle.title,
    value: jobTitle.id,
  })));  

  const workingTimeOptions = [{value: 0, text: "Working Time"}];
  workingTimes.map((workingTime) => (workingTimeOptions.push({
    key: workingTime.id,
    text: workingTime.time,
    value: workingTime.id,
  })));

  const workingTypeOptions = [{value :0, text: "Working Type"}];
  workingTypes.map((workingType) => (workingTypeOptions.push({
    key: workingType.id,
    text: workingType.type,
    value: workingType.id,
  })));

  const handleAddToFavorites = (jobPosting) => {    
    favoriteJobPostingService.add({jobPosting, candidate:{id: 8}}); // TODO: candidateId
  };

  const handleRemoveFromFavorites = (jobPosting) => {
    favoriteJobPostings.map((favoriteJobPosting) => (favoriteJobPosting.jobPosting?.id == jobPosting.id && favoriteJobPostingService.delete(favoriteJobPosting.id)));
    window.location.reload();
  };

  const handlePreviousPage = () => {
    if (pageNo != 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNo != totalNumberOfPages) {
      setPageNo(pageNo + 1);
    }    
  };

  const handlePageSize = (size) => {
    setPageNo(1);
    setPageSize(size);
  };

  const handleCity = (value) => {
    setCityId(value);
  };

  const handleJobTitle = (value) => {
    setJobTitleId(value);
  };

  const handleWorkingTime = (value) => {
    setWorkingTimeId(value);
  };

  const handleWorkingType = (value) => {
    setWorkingTypeId(value);
  };

  const handleFilter = () =>  {
    setPageNo(1);
    setPageSize(10);
    jobPostingService.getAllActiveOnesFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType(cityId, jobTitleId, workingTimeId, workingTypeId).then((result) => setNumberOfData(result.data.data.length));
    jobPostingService.getAllActiveOnesByPageFilteredByCityAndJobTitleAndWorkingTimeAndWorkingType(cityId, jobTitleId, workingTimeId, workingTypeId, pageNo, pageSize).then((result) => setJobPostings(result.data.data));
  };

  const handleClearFilter = () => {
    window.location.reload();
  };  

  return (
    <Grid>
      {type === "filtered" && <Grid.Row>        
        <Grid.Column width="12" textAlign="center">
          <ButtonsOfPagination
            previous={() => handlePreviousPage()}
            next={() => handleNextPage()}
            pageContent={pageNo + " / " + totalNumberOfPages}
            pageSizeOne={() => handlePageSize(10)}
            pageSizeTwo={() => handlePageSize(20)}
            pageSizeThree={() => handlePageSize(50)}
            pageSizeFour={() => handlePageSize(100)}
            pageSizeContent={"Page Size: " + pageSize}
          />
        </Grid.Column>
        <Grid.Column width="4" />      
      </Grid.Row>}      

      <Grid.Row>
        <Grid.Column width={type === "filtered" ? "12" : "16"}>
          <Card.Group itemsPerRow={itemsPerRow}>
            {jobPostings.map((jobPosting) => (
              <Card raised key={jobPosting.id}>
                <Card.Content>
                  {type === "favorites"
                    ? <Button compact circular color="yellow" icon="minus" floated="right" onClick={() => handleRemoveFromFavorites(jobPosting)} />
                    : <Button compact circular color="yellow" icon="bookmark" floated="right" onClick={() => handleAddToFavorites(jobPosting)} />}
                    
                  <Card.Header className="montserrat">
                    {jobPosting.jobTitle?.title}
                  </Card.Header>
                  <Card.Meta>
                    {jobPosting.employer?.companyName}
                    <br />
                    <strong>Number of Open Positions</strong>
                    &nbsp;
                    <Label circular color="pink" className="orbitron" content={jobPosting.numberOfOpenPositions} />
                  </Card.Meta>
                  <Card.Description className="orbitron">
                    <strong>Posting Date</strong>
                    &nbsp;&nbsp;
                    {new Date(jobPosting.postingDate).toDateString()}
                    <br />
                    <strong>Closing Date</strong>
                    &nbsp;&nbsp;
                    {new Date(jobPosting.closingDate).toDateString()}
                  </Card.Description>
                </Card.Content>
                <Card.Content>
                  {type === "recently" && <Icon name="fire" size="big" color="yellow" />}
                  <Button circular compact floated="right" color="violet" content="View Detail" as={NavLink} to={`/jobPostings/jobPosting/${jobPosting.id}`} />
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>

        {type === "filtered" && <Grid.Column width="4">
          <Form>
            <Form.Select
              name="jobTitle"
              placeholder="Job Title"
              options={jobTitleOptions}
              onChange={(event, data) => handleJobTitle(data.value)}
            />
            <Form.Select
              name="city"
              placeholder="City"
              options={cityOptions}
              onChange={(event, data) => handleCity(data.value)}
            />
            <Form.Select
              name="workingTime"
              placeholder="Working Time"
              options={workingTimeOptions}
              onChange={(event, data) => handleWorkingTime(data.value)}
            />
            <Form.Select
              name="workingType"
              placeholder="Working Type"
              options={workingTypeOptions}
              onChange={(event, data) => handleWorkingType(data.value)}
            />
            <br />

            <Button circular fluid color="yellow" content="Filter" onClick={() => handleFilter()} />
            <br />
            <Button circular fluid color="pink" content="Clear Filter" onClick={() => handleClearFilter()} />
          </Form>
        </Grid.Column>} 
      </Grid.Row>
    </Grid>      
  );
}
