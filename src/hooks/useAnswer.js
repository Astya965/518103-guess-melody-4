import {GameType} from "../utils/const.js";
import {ActionCreator} from "../store/reducer.js";

const useAnswer = (question, userAnswer, dispatch) => {

  const checkUserAnswer = () => {
    let answerIsCorrect = false;

    const isArtistAnswerCorrect = (question, userAnswer) => {
      return userAnswer === question.song.artist;
    };

    const isGenreAnswerCorrect = (question, userAnswer) => {
      return Object.entries(userAnswer)
        .every(([key, value]) => {
          return value === (question.answers[key].genre === question.genre);
        });
    };

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return answerIsCorrect;
  };

  dispatch(checkUserAnswer() ? ActionCreator.processCorrectAnswer() : ActionCreator.processWrongAnswer());
  dispatch(ActionCreator.incrementStep());
};

export default useAnswer;
