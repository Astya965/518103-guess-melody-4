import React from "react";
import {shallow} from "enzyme";

import QuestionArtist from "./question-artist.jsx";

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `one`,
      src: ``
    },
    answers: [
      {
        artist: `one`,
        picture: `pic-one`,
      },
      {
        artist: `two`,
        picture: `pic-two`,
      },
      {
        artist: `three`,
        picture: `pic-three`,
      },
    ],
  }
};

describe(`QuestionArtist tests`, () => {

  it(`Click on user answer should pass to the callback value of target input`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();
    const userAnswer = `one`;

    const screen = shallow(<QuestionArtist
      onAnswer={onAnswer}
      question={question}
    />);

    const answerInputs = screen.find(`input`);
    const answerOne = answerInputs.at(0);

    answerOne.simulate(`change`, {target: {value: `one`}});

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer).toHaveBeenCalledWith(userAnswer, question.song.artist);
  });
});
