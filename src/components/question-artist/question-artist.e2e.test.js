import React from "react";
import {shallow} from "enzyme";

import QuestionArtist from "./question-artist.jsx";
import questions from "../../mocks/questions.js";

describe(`QuestionArtist tests`, () => {

  it(`Click on user answer should pass to the callback value of target input`, () => {
    const question = questions[1];
    const onAnswer = jest.fn();
    const userAnswer = `one`;

    const screen = shallow(<QuestionArtist
      onAnswer={onAnswer}
      question={question}
      renderPlayer={() => {}}
    />);

    const answerInputs = screen.find(`input`);
    const answerOne = answerInputs.at(0);

    answerOne.simulate(`change`, {target: {value: `one`}});

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer).toHaveBeenCalledWith(userAnswer, question.song.artist);
  });
});
