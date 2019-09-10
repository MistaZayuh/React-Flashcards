import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class FlashcardForm extends React.Component {
  state = { cardfront: "", cardback: "", };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // more code needs to be added here later
  };


  render () {
    return (
      <Segment inverted>
        <Form inverted onSubmit={ this.handleSubmit }>
          <Form.Group widths='equal'>
            <Form.Input 
            name="cardfront"
            value={ this.state.cardfront }
            onChange={ this.handleChange }
            fluid label='Card Front' 
            placeholder='Card Front' />
            <Form.Input 
            name="cardback"
            value={ this.state.cardback }
            onChange={ this.handleChange }
            fluid label='Card Back' 
            placeholder='Card Back' />
          </Form.Group>
          <Form.Checkbox required={true} label='I agree to give this student an A' />
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    );
  };
};
export default FlashcardForm;

// If you have trouble getting the form to submit, you should remove the required portion on the form