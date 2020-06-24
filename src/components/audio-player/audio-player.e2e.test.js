import React from "react";
import {shallow} from "enzyme";

import AudioPlayer from "./audio-player.jsx";

describe(`AudioPlayer button tests`, () => {

  const renderComponent = (props = {}) => {
    return shallow(
        <AudioPlayer
          isStarting={false}
          src={`some.mp3`}
          onPlayButtonClick={() => {}}
          {...props}/>
    );
  };

  it(`Play-button changes to a pause-button on click`, () => {
    const player = renderComponent();

    const playButton = player.find(`button.track__button--play`);
    playButton.simulate(`click`);

    const pauseButton = player.find(`button.track__button--pause`);
    expect(pauseButton).toHaveLength(1);
  });

  it(`Pause-button changes to a play-button on click`, () => {
    const player = renderComponent();

    const playButton = player.find(`button.track__button--play`);
    playButton.simulate(`click`);

    const pauseButton = player.find(`button.track__button--pause`);
    pauseButton.simulate(`click`);

    expect(playButton).toHaveLength(1);
  });
});
