import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const testErrorCount = 2;
const testQuestions = [
  {
    type: `genre`,
    genre: `folk`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `folk`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Aaron Dunn`,
      src: `https://upload.wikimedia.org/wikipedia/commons/f/fb/Aaron_Dunn_-_Sonata_No_1_-_Movement_1.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/122`,
      artist: `Aaron Dunn`,
    }, {
      picture: `https://api.adorable.io/avatars/128`,
      artist: `Daniel Veesey`,
    }, {
      picture: `https://api.adorable.io/avatars/54`,
      artist: `Karine Gilanyan`,
    }],
  }
];

it(`Render App`, () => {
  const tree = renderer.
    create(
        <App errorCount={testErrorCount} questions={testQuestions}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
