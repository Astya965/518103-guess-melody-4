import React, {useState} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";
import {GameType} from "../../utils/const.js";

const App = (props) => {
  const {errorCount, questions} = props;
  const [step, setStep] = useState(-1);
  const currentQuestion = currentQuestion[step];

  const renderScreen = () => {
    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorCount={errorCount}
          onWelcomeButtonClick={() => setStep(0)}/>
      );
    }

    if (currentQuestion) {
      switch (currentQuestion.type) {
        case GameType.ARTIST:
          return (
            <QuestionArtist currentQuestion={questions[1]}
              onAnswer={(userAnswer, rightAnswer) => {
                setStep(step + 1);
                // eslint-disable-next-line
                console.log(rightAnswer);
                // eslint-disable-next-line
                console.log(userAnswer);
              }}/>
          );
        case GameType.GENRE:
          return (
            <QuestionGenre currentQuestion={questions[0]}
              onAnswer={(userAnswer, rightAnswer) => {
                setStep(step + 1);
                // eslint-disable-next-line
                console.log(rightAnswer);
                // eslint-disable-next-line
                console.log(userAnswer);
              }}/>
          );
      }
    }

    return null;
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {renderScreen()}
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtist currentQuestion={questions[1]}
            onAnswer={() => {}}/>
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre currentQuestion={questions[0]}
            onAnswer={() => {}}/>
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
