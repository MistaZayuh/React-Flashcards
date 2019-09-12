import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./Routes/About"
import NoMatch from "./Routes/NoMatch";
import { Route, Switch } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Friends from "./Routes/Friends"

const App = () => (

  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/friends" component={Friends} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>

);

export default App;