import useAnswer from "./useAnswer.js";
import {ActionType} from "../store/reducer.js";
import questions from "../mocks/questions.js";

describe(`useGame hook should work correctly for genres question`, () => {
  const correctGenreAnswer = {3: true};
  const incorrectGenreAnswer = {2: true, 3: true};

  it(`useGame hook should work correctly for correct answer`, () => {
    const expectedActions = [
      {
        type: ActionType.PROCESS_CORRECT_ANSWER,
        payload: null,
      },
      {
        type: ActionType.INCREMENT_STEP,
        payload: 1,
      }
    ];

    expect(useAnswer(questions[0], correctGenreAnswer)).toEqual(expectedActions);
  });

  it(`useGame hook should work correctly for incorrect answer`, () => {
    const expectedActions = [
      {
        type: ActionType.PROCESS_WRONG_ANSWER,
        payload: 1,
      },
      {
        type: ActionType.INCREMENT_STEP,
        payload: 1,
      }
    ];

    expect(useAnswer(questions[0], incorrectGenreAnswer)).toEqual(expectedActions);
  });
});

describe(`useGame hook should work correctly for artist question`, () => {
  const correctArtistAnswer = `Aaron Dunn`;
  const incorrectArtistAnswer = `Non-Aaron Dunn`;

  it(`useGame hook should work correctly for correct answer`, () => {
    const expectedActions = [
      {
        type: ActionType.PROCESS_CORRECT_ANSWER,
        payload: null,
      },
      {
        type: ActionType.INCREMENT_STEP,
        payload: 1,
      }
    ];

    expect(useAnswer(questions[1], correctArtistAnswer)).toEqual(expectedActions);
  });

  it(`useGame hook should work correctly for incorrect answer`, () => {
    const expectedActions = [
      {
        type: ActionType.PROCESS_WRONG_ANSWER,
        payload: 1,
      },
      {
        type: ActionType.INCREMENT_STEP,
        payload: 1,
      }
    ];

    expect(useAnswer(questions[1], incorrectArtistAnswer)).toEqual(expectedActions);
  });
});
