import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Card, Header } from "semantic-ui-react";
import EmployerService from "./../services/employerService";

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
          <Card raised key={employer.id} as={NavLink} to={"#"}>
            <Card.Content textAlign="center">
              <Card.Header>
                <Header as="h3" color="violet" className="montserrat" content={employer.companyName} />
              </Card.Header>
              <Card.Meta>
                <Header></Header>
                {employer.webAddress}
              </Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
