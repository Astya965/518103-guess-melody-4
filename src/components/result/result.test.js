import React from "react";
import renderer from "react-test-renderer";
import Result from "./result.jsx";

describe(`Render Result`, () => {
  it(`With isSuccess is true`, () => {
    const tree = renderer
      .create(<Result
        isSuccess={true}
        mistakes={2}
        right={5}
        onResetButtonClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With isSuccess is false`, () => {
    const tree = renderer
      .create(<Result
        isSuccess={false}
        onResetButtonClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
