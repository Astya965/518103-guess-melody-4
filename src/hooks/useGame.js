import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ActionCreator} from "../store/reducer.js";
import {getStep, getMistakes, getMaxMistakes, getQuestions} from "../store/selectors.js";

import useAnswer from "../hooks/useAnswer.js";

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
    useAnswer(question, answer).forEach((action) => {
      dispatch(action);
    });
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
