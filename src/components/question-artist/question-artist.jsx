import React from "react";
import PropTypes from "prop-types";

import AudioPlayer from "../../components/audio-player/audio-player.jsx";

const QuestionArtist = (props) => {
  const {question, onAnswer} = props;
  const {song, answers} = question;

  const handleInputChange = (e) => {
    const value = e.target.value;
    onAnswer(value, song.artist);
  };

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

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
