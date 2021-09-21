import React from "react";
import { Grid, Button } from "semantic-ui-react";

export default function ButtonsOfPagination({ previous, next, pageContent, pageSizeOne, pageSizeTwo, pageSizeThree, pageSizeFour, pageSizeContent }) {
  return (
    <Grid>
      <Grid.Row columns="2">
        <Grid.Column textAlign="right">
          <Button
            circular
            compact
            basic
            disabled
            color="black"
            content={pageSizeContent}
          />
          <Button
            circular
            compact
            color="violet"
            icon="genderless"
            onClick={pageSizeOne}
          />
          <Button
            circular
            compact
            color="violet"
            icon="genderless"
            onClick={pageSizeTwo}
          />
          <Button
            circular
            compact
            color="violet"
            icon="genderless"
            onClick={pageSizeThree}
          />
          <Button
            circular
            compact
            color="violet"
            icon="genderless"
            onClick={pageSizeFour}
          />
        </Grid.Column>
        <Grid.Column textAlign="left">
          <Button
            circular
            compact
            color="violet"
            icon="caret left"
            onClick={previous}
          />
          <Button
            circular
            compact
            basic
            disabled
            color="black"
            content={pageContent}
          />
          <Button
            circular
            compact
            color="violet"
            icon="caret right"
            onClick={next}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
