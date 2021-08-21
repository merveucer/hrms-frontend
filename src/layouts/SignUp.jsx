import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, Header, Icon, Modal, Segment } from "semantic-ui-react";

export default function SignUp() {
  const [open, setOpen] = useState(false);

  const handleModal = (value) => {
    setOpen(value);
  };

  return (
    <span>
      <Button
        circular
        color="yellow"
        content="Sign up"
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
          <Icon name="paper plane" />
          What type of account do you want to create ?
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
                  to={"/candidate/add"}
                  onClick={() => setOpen(false)}
                />
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
                  to={"/employer/add"}
                  onClick={() => setOpen(false)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Actions>
      </Modal>
    </span>
  );
}
