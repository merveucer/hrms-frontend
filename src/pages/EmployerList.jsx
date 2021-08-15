import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import EmployerService from "./../services/employerService";
import { Card, Header } from "semantic-ui-react";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  let emmployerService = new EmployerService();

  useEffect(() => {
    emmployerService.getAllByIsActivatedAndIsConfirmed(true, true).then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group itemsPerRow="2">
        {employers.map((employer) => (
          <Card raised key={employer.id}>
            <Card.Content textAlign="center" as={NavLink} to={`/employers/employer/${employer.id}`}>
              <Card.Header>
                <Header as="h3" color="violet" content={employer.companyName} />              
              </Card.Header>
              <Card.Meta content={employer.webAddress} />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
