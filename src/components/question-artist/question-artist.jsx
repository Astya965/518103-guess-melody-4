import React from "react";
import PropTypes from "prop-types";

import GameHeader from "../../components/game-header/game-header.jsx";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";

const QuestionArtist = (props) => {
  const {question, onAnswer} = props;
  const {song, answers} = question;

  const handleInputChange = (e) => {
    const value = e.target.value;
    onAnswer(question, value);
  };

  return (
    <section className="game game--artist">
      <GameHeader />

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer src={song.src} isActive={true} />
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer) => {
            return (
              <div className="artist" key={answer.artist + `-1`}>
                <input className="artist__input visually-hidden" type="radio" name="answer" value={answer.artist} id={answer.artist}
                  onChange={handleInputChange}/>
                <label className="artist__name" htmlFor={answer.artist}>
                  <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                  {answer.artist}
                </label>
              </div>
            );
          })}
        </form>
      </section>
    </section>
  );
};

QuestionArtist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default QuestionArtist;
