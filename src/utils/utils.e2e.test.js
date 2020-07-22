import {isArtistAnswerCorrect, isGenreAnswerCorrect} from "./utils.js";
import questions from "../mocks/questions.js";

describe(`isGenreAnswerCorrect should work correctly`, () => {
  const correctGenreAnswer = {3: true};
  const incorrectGenreAnswer = {2: true, 3: true};

  it(`isGenreAnswerCorrect should work correctly for correct answer`, () => {
    expect(isGenreAnswerCorrect(questions[0], correctGenreAnswer)).toEqual(true);
  });

  it(`isGenreAnswerCorrect work correctly for incorrect answer`, () => {
    expect(isGenreAnswerCorrect(questions[0], incorrectGenreAnswer)).toEqual(false);
  });
});

describe(`isArtistAnswerCorrect should work correctly`, () => {
  const correctArtistAnswer = `Aaron Dunn`;
  const incorrectArtistAnswer = `Non-Aaron Dunn`;

  it(`isArtistAnswerCorrect should work correctly for correct answer`, () => {
    expect(isArtistAnswerCorrect(questions[1], correctArtistAnswer)).toEqual(true);
  });

  it(`isArtistAnswerCorrect work correctly for incorrect answer`, () => {
    expect(isArtistAnswerCorrect(questions[1], incorrectArtistAnswer)).toEqual(false);
  });
});
