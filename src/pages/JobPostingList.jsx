import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import JobPostingService from "./../services/jobPostingService";
import { Card, Label, Button, Rating } from "semantic-ui-react";

export default function JobPostingList() {
  const [jobPostings, setJobPostings] = useState([]);

  let jobPostingService = new JobPostingService();

  useEffect(() => {
    jobPostingService.getAllActiveOnesSortedByPostingDate().then((result) => setJobPostings(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group itemsPerRow="3">
        {jobPostings.map((jobPosting) => (
          <Card raised key={jobPosting.id} className="montserrat">
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
              <Button circular floated="right" color="violet" content="View Detail" as={NavLink} to={`/jobPostings/jobPosting/${jobPosting.id}`} />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
