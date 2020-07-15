import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ActionCreator} from "../../store/reducer.js";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";
import {GameType} from "../../utils/const.js";
import {getStep, getMistakes, getMaxMistakes, getQuestions} from "../../store/selectors.js";

const App = () => {
  const maxMistakes = useSelector(getMaxMistakes);
  const mistakes = useSelector(getMistakes);
  const questions = useSelector(getQuestions);
  const step = useSelector(getStep);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mistakes >= maxMistakes || step >= questions.length) {
      dispatch(ActionCreator.resetGame());
    }
  });

  const currentQuestion = questions[step];

  const onWelcomeButtonClick = () => {
    dispatch(ActionCreator.incrementStep());
  };

  const onAnswer = (question, answer) => {
    dispatch(ActionCreator.processAnswer(question, answer));
    dispatch(ActionCreator.incrementStep());
  };

  const renderScreen = () => {
    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorCount={maxMistakes}
          onWelcomeButtonClick={onWelcomeButtonClick}/>
      );
    }

    if (currentQuestion) {
      switch (currentQuestion.type) {
        case GameType.ARTIST:
          return (
            <QuestionArtist
              question={currentQuestion}
              onAnswer={onAnswer}/>
          );
        case GameType.GENRE:
          return (
            <QuestionGenre
              question={currentQuestion}
              onAnswer={onAnswer}/>
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
          <QuestionArtist question={questions[1]}
            onAnswer={onAnswer}/>
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre question={questions[0]}
            onAnswer={onAnswer}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
