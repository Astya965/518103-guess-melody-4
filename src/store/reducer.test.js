import {initialState, reducer, ActionCreator, ActionType} from "./reducer.js";
import questions from "../mocks/questions.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initialState, {})).toEqual(initialState);
});

it(`Reducer should increment current step by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 0,
    questions,
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
    questions,
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
    questions,
  });
});

it(`Reducer should increment number of mistakes by a given value`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: ActionType.PROCESS_WRONG_ANSWER,
    payload: 1,
  })).toEqual({
    step: -1,
    mistakes: 1,
  });

  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: ActionType.PROCESS_CORRECT_ANSWER,
    payload: 0,
  })).toEqual({
    step: -1,
    mistakes: 0,
  });
});

it(`Reducer should reset to initial state`, () => {
  expect(reducer({
    mistakes: 2,
    maxMistakes: 3,
    step: 1,
    questions,
  }, {
    type: ActionType.RESET,
    payload: null,
  })).toEqual({
    mistakes: 0,
    maxMistakes: 3,
    step: -1,
    questions,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`Action creator for process correct answer returns correct action`, () => {
    expect(ActionCreator.processCorrectAnswer()).toEqual({
      type: ActionType.PROCESS_CORRECT_ANSWER,
      payload: null,
    });
  });

  it(`Action creator for process wrong answer returns correct action`, () => {
    expect(ActionCreator.processWrongAnswer()).toEqual({
      type: ActionType.PROCESS_WRONG_ANSWER,
      payload: 1,
    });
  });

  it(`Action creator for reset returns correct action`, () => {
    expect(ActionCreator.resetGame()).toEqual({
      type: ActionType.RESET,
      payload: null,
    });
  });
});
