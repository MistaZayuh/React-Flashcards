import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react"

const Flashcard = (props) => (
  <Grid.Column key={ props.id }>
    <Icon
    onClick={() => props.remove(props.id)}
    name= "window close outline" />
    <Segment 
    style={{height: "200px", textAlign: "center"}}
    onClick={() => props.handleClick(props.id)}>
      { props.flipped == false ? props.cardfront : props.cardback }
    
    </Segment>
  </Grid.Column>

);

export default Flashcard;