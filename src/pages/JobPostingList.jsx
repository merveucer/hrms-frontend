import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import JobPostingService from "./../services/jobPostingService";
import { Card, Label, Button, Rating, Icon } from "semantic-ui-react";

export default function JobPostingList({type, itemsPerRow}) {
  const [jobPostings, setJobPostings] = useState([]);

  let jobPostingService = new JobPostingService();

  useEffect(() => {
    if (type === "all") {
      jobPostingService.getAllActiveOnesSortedByPostingDate().then((result) => setJobPostings(result.data.data)); 
    } else if (type === "recently") {
      jobPostingService.getAllActiveOnesSortedByPostingDateTop6().then((result) => setJobPostings(result.data.data));
    } else {
      jobPostingService.getAllActiveOnesByEmployerId(type).then((result) => setJobPostings(result.data.data));
    }
  }, []);

  return (
    <div>
      <Card.Group itemsPerRow={itemsPerRow}>
        {jobPostings.map((jobPosting) => (
          <Card raised key={jobPosting.id}>
            <Card.Content>
              <Rating maxRating={1} defaultRating={0} icon="star" size="huge" className="job-posting-favorite" />
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
              {type === "recently" ? (<Icon name="fire" size="big" color="yellow" />) : null}
              <Button circular floated="right" color="violet" content="View Detail" as={NavLink} to={`/jobPostings/jobPosting/${jobPosting.id}`} />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
