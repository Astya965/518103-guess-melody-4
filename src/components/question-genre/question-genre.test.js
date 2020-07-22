import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import QuestionGenre from "./question-genre.jsx";
import questions from "../../mocks/questions.js";

const mockStore = configureStore([]);

it(`Render QuestionGenre`, () => {
  const store = mockStore({
    mistakes: 2,
  });

  const tree = renderer.
    create(
        <Provider store={store}>
          <QuestionGenre
            onAnswer={() => {}}
            question={questions[0]}
            mistakes={2}
            renderPlayer={() => {}}/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
