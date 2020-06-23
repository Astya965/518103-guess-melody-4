import React from "react";
import renderer from "react-test-renderer";

import QuestionArtist from "./question-artist.jsx";
import questions from "../../mocks/questions.js";

it(`Render QuestionArtist`, () => {
  const tree = renderer.
    create(
        <QuestionArtist onAnswer={() => {}} question={questions[1]} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
