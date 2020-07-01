import React from "react";
import renderer from "react-test-renderer";

import QuestionGenre from "./question-genre.jsx";
import questions from "../../mocks/questions.js";

it(`Render QuestionGenre`, () => {
  const tree = renderer.
    create(
        <QuestionGenre
          onAnswer={() => {}}
          question={questions[0]}
          renderPlayer={() => {}}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
