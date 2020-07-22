import {useSelector, useDispatch} from "react-redux";
import {ActionCreator, getStep, getMistakes, getMaxMistakes, getQuestions} from "../store/reducer.js";
import {isArtistAnswerCorrect, isGenreAnswerCorrect} from "../utils/utils.js";
import {GameType} from "../utils/const.js";

const checkUserAnswer = (question, userAnswer) => {
  switch (question.type) {
    case GameType.ARTIST:
      return isArtistAnswerCorrect(question, userAnswer);
    case GameType.GENRE:
      return isGenreAnswerCorrect(question, userAnswer);
  }

  return false;
};

const useGame = () => {
  const maxMistakes = useSelector(getMaxMistakes);
  const mistakes = useSelector(getMistakes);
  const questions = useSelector(getQuestions);
  const step = useSelector(getStep);
  const dispatch = useDispatch();

  const onWelcomeButtonClick = () => {
    dispatch(ActionCreator.incrementStep());
  };

  const onResetButtonClick = () => {
    dispatch(ActionCreator.resetGame());
  };

  const onAnswer = (question, answer) => {
    if (checkUserAnswer(question, answer)) {
      dispatch(ActionCreator.processCorrectAnswer());
    } else {
      dispatch(ActionCreator.processWrongAnswer());
    }
    dispatch(ActionCreator.incrementStep());
  };

  return {
    mistakes,
    maxMistakes,
    questions,
    step,
    onWelcomeButtonClick,
    onResetButtonClick,
    onAnswer
  };
};

export default useGame;
