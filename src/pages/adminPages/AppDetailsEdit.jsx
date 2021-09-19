import React from "react";
import Headline from "./../../layouts/Headline";
import ButtonsOfEdit from "./../../layouts/ButtonsOfEdit";
import { Container, Grid } from "semantic-ui-react";

export default function AppDetailsEdit() {
  return (
    <div>
      <Container className="content">
        <Headline content="Edit App Details" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="5" />
            <Grid.Column width="6">
              <ButtonsOfEdit
                content="City"
                firstIcon="pencil alternate"
                secondIcon="add"
                firstTo={"/adminPanel/edit/city/update"}
                secondTo={"/adminPanel/edit/city/add"}
              />
              <ButtonsOfEdit
                content="Job Title"
                firstIcon="pencil alternate"
                secondIcon="add"
                firstTo={"/adminPanel/edit/jobTitle/update"}
                secondTo={"/adminPanel/edit/jobTitle/add"}
              />
              <ButtonsOfEdit
                content="Language"
                firstIcon="pencil alternate"
                secondIcon="add"
                firstTo={"/adminPanel/edit/language/update"}
                secondTo={"/adminPanel/edit/language/add"}
              />
              <ButtonsOfEdit
                content="Level"
                firstIcon="pencil alternate"
                secondIcon="add"
                firstTo={"/adminPanel/edit/level/update"}
                secondTo={"/adminPanel/edit/level/add"}
              />
              <ButtonsOfEdit
                content="Link Name"
                firstIcon="pencil alternate"
                secondIcon="add"
                firstTo={"/adminPanel/edit/linkName/update"}
                secondTo={"/adminPanel/edit/linkName/add"}
              />
              <ButtonsOfEdit
                content="Working Time"
                firstIcon="pencil alternate"
                secondIcon="add"
                firstTo={"/adminPanel/edit/workingTime/update"}
                secondTo={"/adminPanel/edit/workingTime/add"}
              />
              <ButtonsOfEdit
                content="Working Type"
                firstIcon="pencil alternate"
                secondIcon="add"
                firstTo={"/adminPanel/edit/workingType/update"}
                secondTo={"/adminPanel/edit/workingType/add"}
              />
            </Grid.Column>
            <Grid.Column width="5" />
          </Grid.Row>
        </Grid>
      </Container>    
    </div>
  );
}
