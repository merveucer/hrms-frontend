import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import JobPostingService from "./../services/jobPostingService";
import FavoriteJobPostingService from './../services/favoriteJobPostingService';
import { Card, Label, Button, Icon, Segment, Header } from "semantic-ui-react";

export default function JobPostingList({ type, itemsPerRow, id }) {

  const [jobPostings, setJobPostings] = useState([]);
  const [favoriteJobPostings, setFavoriteJobPostings] = useState([]);

  let jobPostingService = new JobPostingService();
  let favoriteJobPostingService = new FavoriteJobPostingService();

  useEffect(() => {
    if (type === "all") {
      jobPostingService.getAllActiveOnesSortedByPostingDate().then((result) => setJobPostings(result.data.data));
    } else if (type === "recently") {
      jobPostingService.getAllActiveOnesSortedByPostingDateTop6().then((result) => setJobPostings(result.data.data));
    } else if (type === "favorites") {
      favoriteJobPostingService.getAllActiveJobPostingsByCandidateIdSortedByDateOfAddToFavorites(id).then((result) => setJobPostings(result.data.data));
      favoriteJobPostingService.getAllByCandidateId(id).then((result) => setFavoriteJobPostings(result.data.data));
    } else if (type === "byEmployer") {
      jobPostingService.getAllActiveOnesByEmployerId(id).then((result) => setJobPostings(result.data.data));
    }
  }, []);

  const handleAddToFavorites = (jobPosting) => {
    favoriteJobPostingService.add({jobPosting, candidate:{id: 8}}) // TODO: candidateId
  };

  const handleRemoveFromFavorites = (jobPosting) => {
    favoriteJobPostings.map((favoriteJobPosting) => (
      favoriteJobPosting.jobPosting?.id == jobPosting.id && favoriteJobPostingService.delete(favoriteJobPosting.id)))

    window.location.reload();
  };

  return (
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
            {type === "recently"
            ? <Icon name="fire" size="big" color="yellow" />
            : null}
            <Button circular floated="right" color="violet" content="View Detail" as={NavLink} to={`/jobPostings/jobPosting/${jobPosting.id}`} />
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}
