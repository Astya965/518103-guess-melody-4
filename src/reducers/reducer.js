import {extendObject} from "../utils/utils.js";
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
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES:
      return incrementMistakes(state, action);

    case ActionType.INCREMENT_STEP:
      return incrementStep(state, action);

    default: return state;
  }
};

const incrementMistakes = (state, action) => {
  const mistakes = state.mistakes + action.payload;

  if (mistakes >= state.maxMistakes) {
    return extendObject({}, initialState);
  }

  return extendObject(state, {
    mistakes,
  });
};

const incrementStep = (state, action) => {
  let nextStep = state.step + action.payload;

  if (nextStep >= state.questions.length) {
    return extendObject({}, initialState);
  }

  return extendObject(state, {
    step: nextStep,
  });
};
