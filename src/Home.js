import React from 'react';
import { Header, Container, Button, Icon } from "semantic-ui-react";
import Flashcards from "./Flashcards";
import FlashcardForm from "./FlashcardForm";

class Home extends React.Component {
  state = { flashcards: [
    { id: 1, cardfront: "Where is information stored in a Component?", cardback: "In the state", flipped: false },
    { id: 2, cardfront: "Question", cardback: "Answer", flipped: false },
    { id: 3, cardfront: "Question", cardback: "Answer", flipped: false },
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

  removeFlashcard = (id) => {
    const flashcards = this.state.flashcards.filter( flashcard => {
      if (flashcard.id !== id)
        return flashcard;
    });
    this.setState({ flashcards })
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm, })
  }

  handleClick = (id) => {
    this.setState({
      flashcards: this.state.flashcards.map( flashcard => {
        if (flashcard.id === id) {
          return { ...flashcard, flipped: !flashcard.flipped, }
        }
        return flashcard;
      })
    })
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
      <Button icon color="purple" onClick={this.toggleForm}>
        <Icon name={this.state.showForm ? "compress" : "expand"} />
      </Button>
      { this.state.showForm ? <FlashcardForm addFlashcardFunction={this.addFlashcard} /> : null }
      <Flashcards 
      removeFlashcardFunction={this.removeFlashcard}
      flashcardsArray={ this.state.flashcards }
      handleClick={this.handleClick} />
      </Container>
    );
  };
};

export default Home;