import React from "react";
import { Button } from "semantic-ui-react";

export default function LinkedinButton({ url }) {
  return (
    <Button
      compact
      circular
      icon="linkedin"
      color="linkedin"
      href={url}
      target="blank"
    />
  );
}
