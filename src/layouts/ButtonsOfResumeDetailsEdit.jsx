import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Header, Button } from 'semantic-ui-react';

export default function ButtonsOfResumeDetailsEdit({content, firstIcon, secondIcon, firstTo, secondTo}) {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width="12">
          <Header content={content} className="orbitron" />
        </Grid.Column>
        <Grid.Column width="4">
          <Button
            circular
            compact
            floated="right"
            color="yellow"
            icon={firstIcon}
            as={NavLink}
            to={firstTo}
          />
          <Button
            circular
            compact
            floated="right"
            color="pink"
            icon={secondIcon}
            as={NavLink}
            to={secondTo}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
