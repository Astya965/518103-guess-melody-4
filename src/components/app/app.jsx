import React, {useState} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";
import {GameType} from "../../utils/const.js";

import withAudioPlayer from "../../hof/with-audio-player/with-audio-player.js";

const GenreQuestionScreenWrapped = withAudioPlayer(QuestionGenre);
const ArtistQuestionScreenWrapped = withAudioPlayer(QuestionArtist);

const App = (props) => {
  const {errorCount, questions} = props;
  const [step, setStep] = useState(-1);
  const currentQuestion = questions[step];

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
            <ArtistQuestionScreenWrapped
              question={questions[1]}
              onAnswer={() => {
                setStep(step + 1);
              }}/>
          );
        case GameType.GENRE:
          return (
            <GenreQuestionScreenWrapped
              question={questions[0]}
              onAnswer={() => {
                setStep(step + 1);
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
          <ArtistQuestionScreenWrapped question={questions[1]}
            onAnswer={() => {}}/>
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreenWrapped question={questions[0]}
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
