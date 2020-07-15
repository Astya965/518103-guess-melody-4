import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";
import {GameType} from "../../utils/const.js";
import useGame from "../../hooks/useGame.js";

const App = () => {
  const {questions, step, maxMistakes, onWelcomeButtonClick, onAnswer} = useGame();

  const currentQuestion = questions[step];

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
