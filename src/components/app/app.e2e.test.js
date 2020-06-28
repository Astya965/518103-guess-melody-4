import React from "react";
import {mount} from "enzyme";

import App from "./app.jsx";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";
import questions from "../../mocks/questions.js";

const testErrorCount = 1;


describe(`Render App`, () => {

  const renderComponent = (props = {}) => {
    return mount(
        <App errorCount={testErrorCount}
          questions={questions}
          {...props}
        />);
  };

  it(`Render first time`, () => {
    const appComponent = renderComponent();

    expect(appComponent.find(WelcomeScreen)).toHaveLength(1);
  });

  it(`Render QuestionGenre`, () => {
    const appComponent = renderComponent();

    const startButton = appComponent
      .find(WelcomeScreen).find(`button.welcome__button`);
    startButton.simulate(`click`);

    expect(appComponent.find(QuestionGenre)).toHaveLength(1);
  });

  it(`Render QuestionArtist`, () => {
    const appComponent = renderComponent();

    const startButton = appComponent
      .find(WelcomeScreen).find(`button.welcome__button`);
    startButton.simulate(`click`);

    const answerForm = appComponent
      .find(QuestionGenre).find(`form.game__tracks`);
    answerForm.simulate(`submit`);

    expect(appComponent.find(QuestionArtist)).toHaveLength(1);
  });

  it(`After all questions come back to WelcomeScreen`, () => {
    const appComponent = renderComponent();

    const startButton = appComponent
      .find(WelcomeScreen).find(`button.welcome__button`);
    startButton.simulate(`click`);

    const answerForm = appComponent
      .find(QuestionGenre).find(`form.game__tracks`);
    answerForm.simulate(`submit`);

    const answerInputs = appComponent
      .find(QuestionArtist).find(`input.artist__input`);
    const answerOne = answerInputs.at(0);
    answerOne.simulate(`change`);

    expect(appComponent.find(WelcomeScreen)).toHaveLength(1);
  });
});
