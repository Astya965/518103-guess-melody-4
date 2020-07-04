import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import GameHeader from "./game-header.jsx";

const mockStore = configureStore([]);

it(`Render GameHeader`, () => {
  const store = mockStore({
    mistakes: 2,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <GameHeader />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
