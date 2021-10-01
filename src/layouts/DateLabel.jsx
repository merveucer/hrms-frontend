import React from "react";
import { Label, Grid } from "semantic-ui-react";

export default function DateLabel({value}) {
  return (
    <span className="date">
      <Label circular basic color="pink">
        <Grid>
          <Grid.Row>
            <Grid.Column width="2" />
            <Grid.Column width="12">
              <span className="orbitron">{value}</span>
            </Grid.Column>
            <Grid.Column width="2" />
          </Grid.Row>
        </Grid>
      </Label>
    </span>
  );
}
