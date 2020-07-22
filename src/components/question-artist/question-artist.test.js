import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import QuestionArtist from "./question-artist.jsx";
import questions from "../../mocks/questions.js";

const mockStore = configureStore([]);

it(`Render QuestionArtist`, () => {
  const store = mockStore({
    mistakes: 2,
  });

  const tree = renderer.
    create(
        <Provider store={store}>
          <QuestionArtist
            onAnswer={() => {}}
            question={questions[1]}
            mistakes={2}
            renderPlayer={() => {}}/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
