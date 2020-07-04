import React from "react";
import {shallow, mount} from "enzyme";

import QuestionGenre from "./question-genre.jsx";
import questions from "../../mocks/questions.js";

describe(`QuestionArtist tests`, () => {

  it(`When user answers genre question form is not sent`, () => {
    const question = questions[0];
    const onAnswer = jest.fn();
    const genreQuestion = shallow(<QuestionGenre
      onAnswer={onAnswer}
      question={question}
      renderPlayer={() => {}}
    />);

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();

    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`User answer passed to callback is consistent with "userAnswers" prop`, () => {
    const question = questions[0];
    const onAnswer = jest.fn((...args) => [...args]);
    const userAnswer = {"1": true};
    const inputChecked = [false, true, false, false];

    const genreQuestion = mount(<QuestionGenre
      onAnswer={onAnswer}
      question={question}
      renderPlayer={() => {}}
    />);

    const form = genreQuestion.find(`form`);
    const inputTwo = genreQuestion.find(`input`).at(1);

    inputTwo.simulate(`change`, {target: {checked: true}});
    form.simulate(`submit`, {preventDefault() {}});

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer).toHaveBeenCalledWith(question, userAnswer);

    expect(
        genreQuestion.find(`input`).map((it) => it.prop(`checked`))
    ).toEqual(inputChecked);
  });
});
