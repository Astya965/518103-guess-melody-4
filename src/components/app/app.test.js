import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const testErrorCount = 2;

it(`Render App`, () => {
  const tree = renderer.
    create(
        <App errorCount={testErrorCount} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
