import {useEffect} from "react";
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

  useEffect(() => {
    if (mistakes >= maxMistakes || step >= questions.length) {
      dispatch(ActionCreator.resetGame());
    }
  });

  const onWelcomeButtonClick = () => {
    dispatch(ActionCreator.incrementStep());
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
    maxMistakes,
    questions,
    step,
    onWelcomeButtonClick,
    onAnswer
  };
};

export default useGame;
