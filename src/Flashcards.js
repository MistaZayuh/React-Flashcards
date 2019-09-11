import React from "react";
import { Grid } from "semantic-ui-react";
import Flashcard from "./Flashcard";

const Flashcards = (props) => (


  <Grid relaxed columns={4}>
    {  props.flashcardsArray.map( flashcard => (
      <Flashcard
      key={flashcard.id}
      handleClick={props.handleClick}
      remove={ props.removeFlashcardFunction }
      { ...flashcard }
      />
    ))
    }
  </Grid>

);

export default Flashcards;