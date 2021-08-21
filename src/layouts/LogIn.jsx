import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, Header, Icon, Modal, Segment } from "semantic-ui-react";

export default function LogIn() {
  const [open, setOpen] = useState(false);

  const handleModal = (value) => {
    setOpen(value);
  };
  
  return (
    <span>
      <Button
        circular
        color="pink"
        content="Log-in"
        onClick={() => handleModal(true)}
      />

      <Modal
        basic
        dimmer
        onClose={() => handleModal(false)}
        onOpen={() => handleModal(true)}
        open={open}
        size="small"
      >
        <Header icon as="h2" className="orbitron">
          <Icon name="sign-in" />
          What type of account do you want to log into ?
        </Header>

        <Modal.Actions>
          <Grid>
            <Grid.Row>
              <Grid.Column width="7">
                <Button
                  circular
                  fluid
                  color="pink"
                  content="Candidate"
                  as={NavLink}
                  to={"#"}
                  onClick={() => setOpen(false)}
                ></Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Segment basic className="or">
                  or
                </Segment>
              </Grid.Column>
              <Grid.Column width="7">
                <Button
                  circular
                  fluid
                  color="yellow"
                  content="Employer"
                  as={NavLink}
                  to={"#"}
                  onClick={() => setOpen(false)}
                ></Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Actions>
      </Modal>
    </span>
  );
}
