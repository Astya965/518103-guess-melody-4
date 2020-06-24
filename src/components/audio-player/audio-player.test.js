import React from "react";
import renderer from "react-test-renderer";

import AudioPlayer from "./audio-player.jsx";

it(`Render AudioPlayer`, () => {
  const tree = renderer
    .create(
        <AudioPlayer
          isStarting={false}
          src={`some.mp3`}
          onPlayButtonClick={() => {}}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
