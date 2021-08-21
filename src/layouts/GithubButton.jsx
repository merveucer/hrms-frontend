import React from "react";
import { Button } from "semantic-ui-react";

export default function GithubButton({ url }) {
  return (
    <Button
      compact
      circular
      icon="github"
      color="black"
      href={url}
      target="blank"
    />
  );
}
