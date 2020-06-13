import React from "react";
import renderer from "react-test-renderer";

import WelcomeScreen from "./welcome-screen.jsx";

const testErrorCount = 2;

it(`Render WelcomeScreen`, () => {
  const tree = renderer.
    create(
        <WelcomeScreen
          errorCount={testErrorCount}
          onWelcomeButtonClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
