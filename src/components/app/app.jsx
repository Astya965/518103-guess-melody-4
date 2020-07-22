import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";
import Result from "../result/result.jsx";

import {GameType} from "../../utils/const.js";
import useGame from "../../hooks/useGame.js";

const App = () => {
  const {questions, step, mistakes, maxMistakes, onWelcomeButtonClick, onResetButtonClick, onAnswer} = useGame();

  const currentQuestion = questions[step];

  const renderScreen = () => {
    if (step === -1) {
      return (
        <WelcomeScreen
          errorCount={maxMistakes}
          onWelcomeButtonClick={onWelcomeButtonClick}/>
      );
    }

    if (mistakes >= maxMistakes) {
      return <Result isSuccess={false}
        onResetButtonClick={onResetButtonClick}/>;
    }

    if (step >= questions.length) {
      return <Result isSuccess={true} mistakes={mistakes} right={questions.length - mistakes}
        onResetButtonClick={onResetButtonClick} />;
    }

    if (currentQuestion) {
      switch (currentQuestion.type) {
        case GameType.ARTIST:
          return (
            <QuestionArtist
              question={currentQuestion}
              mistakes={mistakes}
              onAnswer={onAnswer}/>
          );
        case GameType.GENRE:
          return (
            <QuestionGenre
              question={currentQuestion}
              mistakes={mistakes}
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
