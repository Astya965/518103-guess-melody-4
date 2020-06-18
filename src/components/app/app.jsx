import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";


const welcomeButtonHandler = () => {};

const App = (props) => {
  const {errorCount, questions} = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            errorCount={errorCount}
            onWelcomeButtonClick={welcomeButtonHandler}/>
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtist question={questions[1]}/>
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre question={questions[0]}/>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
