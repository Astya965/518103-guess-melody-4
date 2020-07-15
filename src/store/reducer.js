import questions from "../mocks/questions.js";

const initialState = {
  mistakes: 0,
  maxMistakes: 3,
  step: -1,
  questions,
};

export const ActionType = {
  PROCESS_CORRECT_ANSWER: `PROCESS_CORRECT_ANSWER`,
  PROCESS_WRONG_ANSWER: `PROCESS_WRONG_ANSWER`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET: `RESET`,
};

export const ActionCreator = {
  processCorrectAnswer: () => ({
    type: ActionType.PROCESS_CORRECT_ANSWER,
    payload: null,
  }),

  processWrongAnswer: () => ({
    type: ActionType.PROCESS_WRONG_ANSWER,
    payload: 1,
  }),

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
    case ActionType.PROCESS_CORRECT_ANSWER:
      return state;

    case ActionType.PROCESS_WRONG_ANSWER:
      return {...state, mistakes: state.mistakes + action.payload};

    case ActionType.INCREMENT_STEP:
      return {...state, step: state.step + action.payload};

    case ActionType.RESET:
      return {...initialState, step: -1, mistakes: 0};

    default: return state;
  }
};
