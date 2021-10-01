import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CompanyStaffService from "./../../services/companyStaffService";
import { Button, Header } from "semantic-ui-react";

export default function CompanyStaffUpdateButton({ id }) {
  const [companyStaff, setCompanyStaff] = useState({});

  let companyStaffService = new CompanyStaffService();

  useEffect(() => {
    companyStaffService.getById(id).then((result) => setCompanyStaff(result.data.data));
  }, []);

  return (
    <span>
      <Button
        circular
        compact
        color="yellow"
        icon="cog"
        floated="right"
        as={NavLink}
        to={`/adminPanel/companyStaff/${id}/update`}
      />
      <Header
        size="large"
        floated="right"
        content={companyStaff.firstName + " " + companyStaff.lastName}
        className="orbitron"
      />
      <br />
      <br />
      <br />
      <br />
    </span>
  );
}
