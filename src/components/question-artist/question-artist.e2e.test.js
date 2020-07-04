import React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import QuestionArtist from "./question-artist.jsx";
import questions from "../../mocks/questions.js";

const mockStore = configureStore([]);

describe(`QuestionArtist tests`, () => {
  const store = mockStore({
    mistakes: 2,
  });

  it(`Click on user answer should pass to the callback value of target input`, () => {
    const question = questions[1];
    const onAnswer = jest.fn();
    const userAnswer = `one`;

    const screen = mount(
        <Provider store={store}>
          <QuestionArtist
            onAnswer={onAnswer}
            question={question}
            renderPlayer={() => {}}
          />
        </Provider>
    );

    const answerInputs = screen.find(`input.artist__input`);
    const answerOne = answerInputs.at(0);

    answerOne.simulate(`change`, {target: {value: `one`}});

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer).toHaveBeenCalledWith(question, userAnswer);
  });
});
