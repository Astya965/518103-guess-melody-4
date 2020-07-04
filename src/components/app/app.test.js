import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import App from "./app.jsx";
import questions from "../../mocks/questions.js";

const mockStore = configureStore([]);

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const store = mockStore({
      mistakes: 0,
      step: -1,
      maxMistakes: 3,
      questions
    });

    const tree = renderer.
      create(
          <Provider store={store}>
            <App />
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render QuestionGenre`, () => {
    const store = mockStore({
      mistakes: 1,
      step: 0,
      maxMistakes: 3,
      questions
    });

    const tree = renderer.
      create(
          <Provider store={store}>
            <App />
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render QuestionArtist`, () => {
    const store = mockStore({
      mistakes: 1,
      step: 1,
      maxMistakes: 3,
      questions
    });

    const tree = renderer.
      create(
          <Provider store={store}>
            <App />
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
