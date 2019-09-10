import React from "react";
import { Grid, Icon } from "semantic-ui-react"

const Flashcard = (props) => (
  <Grid.Column key={ props.id }>
    { props.cardfront }
  <Icon
  name= "window close outline" />
  </Grid.Column>
);

export default Flashcard;