import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

export default function CardOfConfirm({ header, confirm, unconfirm, view }) {
  return (
    <Card raised fluid>
      <Card.Content>
        <Card.Header content={header} className="montserrat" />
      </Card.Content>
      <Card.Content>
        <Button
          circular
          compact
          color="yellow"
          icon="check"
          floated="right"
          onClick={confirm}
        />
        <Button
          circular
          compact
          color="pink"
          icon="delete"
          floated="right"
          onClick={unconfirm}
        />
        <Button
          circular
          compact
          color="violet"
          content="View"
          as={NavLink}
          to={view}
        />
      </Card.Content>
    </Card>
  );
}
