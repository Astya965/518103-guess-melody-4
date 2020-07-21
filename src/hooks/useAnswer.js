import {GameType} from "../utils/const.js";
import {ActionCreator} from "../store/reducer.js";

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return Object.entries(userAnswer)
    .every(([key, value]) => {
      return value === (question.answers[key].genre === question.genre);
    });
};

const useAnswer = (question, userAnswer, dispatch) => {

  const checkUserAnswer = () => {

    switch (question.type) {
      case GameType.ARTIST:
        return isArtistAnswerCorrect(question, userAnswer);
      case GameType.GENRE:
        return  isGenreAnswerCorrect(question, userAnswer);
    }
  };

  dispatch(checkUserAnswer() ? ActionCreator.processCorrectAnswer() : ActionCreator.processWrongAnswer());
  dispatch(ActionCreator.incrementStep());
};

export default useAnswer;
