import React from "react";
import renderer from "react-test-renderer";

import QuestionArtist from "./question-artist.jsx";

const testQuestionArtist = {
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
};

it(`Render QuestionArtist`, () => {
  const tree = renderer.
    create(
        <QuestionArtist question={testQuestionArtist} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
