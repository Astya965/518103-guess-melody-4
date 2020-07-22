import React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import QuestionGenre from "./question-genre.jsx";
import questions from "../../mocks/questions.js";

const mockStore = configureStore([]);

describe(`QuestionArtist tests`, () => {
  const store = mockStore({
    mistakes: 2,
  });

  it(`When user answers genre question form is not sent`, () => {
    const question = questions[0];
    const onAnswer = jest.fn();
    const genreQuestion = mount(
        <Provider store={store}>
          <QuestionGenre
            onAnswer={onAnswer}
            question={question}
            mistakes={2}
            renderPlayer={() => {}} />
        </Provider>
    );

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

    const genreQuestion = mount(
        <Provider store={store}>
          <QuestionGenre
            onAnswer={onAnswer}
            question={question}
            mistakes={2}
            renderPlayer={() => {}} />
        </Provider>);

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
