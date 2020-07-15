import {GameType} from '../utils/const.js';
import questions from "../mocks/questions.js";

const initialState = {
  mistakes: 0,
  maxMistakes: 3,
  step: -1,
  questions,
};

export const ActionType = {
  PROCESS_ANSWER: `PROCESS_ANSWER`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET: `RESET`,
};

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return Object.entries(userAnswer)
    .every(([key, value]) => {
      return value === (question.answers[key].genre === question.genre);
    });
};

export const ActionCreator = {
  processAnswer: (question, userAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.PROCESS_ANSWER,
      payload: answerIsCorrect ? 0 : 1,
    };
  },

  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  resetGame: () => ({
    type: ActionType.RESET,
    payload: null,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PROCESS_ANSWER:
      return {...state, mistakes: state.mistakes + action.payload};;

    case ActionType.INCREMENT_STEP:
      return {...state, step: state.step + action.payload};

    case ActionType.RESET:
      return {...initialState, step: -1, mistakes: 0};

    default: return state;
  }
};
