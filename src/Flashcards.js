import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import Flashcard from "./Flashcard";

const Flashcards = (props) => (


  <Grid relaxed columns={4}>
    {  props.flashcardsArray.map( flashcard => (
      <Flashcard
      key={flashcard.id}
      { ...flashcard }
      />
    ))
    }
  </Grid>

);

export default Flashcards;