import {GameType} from "../utils/const.js";
import {ActionCreator} from "../store/reducer.js";

const useAnswer = (question, userAnswer, dispatch) => {

  const checkUserAnswer = () => {
    let answerIsCorrect = false;

    const isArtistAnswerCorrect = () => {
      return userAnswer === question.song.artist;
    };

    const isGenreAnswerCorrect = () => {
      return Object.entries(userAnswer)
        .every(([key, value]) => {
          return value === (question.answers[key].genre === question.genre);
        });
    };

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect();
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect();
        break;
    }

    return answerIsCorrect;
  };

  dispatch(checkUserAnswer() ? ActionCreator.processCorrectAnswer() : ActionCreator.processWrongAnswer());
  dispatch(ActionCreator.incrementStep());
};

export default useAnswer;
