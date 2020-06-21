import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";
import questions from "../../mocks/questions.js";

const testErrorCount = 2;

it(`Render App`, () => {
  const tree = renderer.
    create(
        <App errorCount={testErrorCount} questions={questions}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
