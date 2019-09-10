import React from 'react';
import { Header, Container, Grid, } from "semantic-ui-react";
import Flashcards from "./Flashcards";
import FlashcardForm from "./FlashcardForm";

class App extends React.Component {
  state = { flashcards: [
    { id: 1, cardfront: "", cardback: "", flipped: false },
    { id: 2, cardfront: "", cardback: "", flipped: false },
    { id: 3, cardfront: "", cardback: "", flipped: false },
  ],
  showForm: true,
 };

  addFlashcard = (cardInfo) => {
    const flashcard = { id: this.getId(), ...cardInfo };
    this.setState({ flashcards: [flashcard, ...this.state.flashcards]});
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };



  render () {
    return (
      <Container style={{marginTop: "25px", }}>
      <Header 
      style={{marginBottom: "50px"}}
      as="h1"
      textAlign="center"
      >
        Flashcards yo
      </Header>
      <FlashcardForm addFlashcardFunction={this.addFlashcard} />
      <Flashcards 
      flashcardsArray={ this.state.flashcards } />
      </Container>
    );
  };
};

export default App;