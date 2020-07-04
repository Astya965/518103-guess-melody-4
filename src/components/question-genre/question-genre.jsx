import React, {useState} from "react";
import PropTypes from "prop-types";

import AudioPlayer from "../../components/audio-player/audio-player.jsx";

const QuestionGenre = (props) => {
  const {question, onAnswer} = props;
  const {genre, answers} = question;
  const [userAnswers, setUserAnswers] = useState({});
  const [activePlayer, setActivePlayer] = useState(0);

  const handleActiveChange = (id) => () => setActivePlayer(activePlayer === id ? -1 : id);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAnswer(question, userAnswers);
  };

  const handleInputChange = (i) => (e) => {
    const value = e.target.checked;
    setUserAnswers({
      ...userAnswers,
      [i]: value,
    });
  };

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={handleFormSubmit}>
          {answers.map((answer, i) => {
            return (
              <div className="track" key={answer.src + i}>
                <AudioPlayer src={answer.src}
                  isActive={i === activePlayer}
                  onPlayButtonClick={handleActiveChange(i)} />
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" value={answer.genre} id={answer.src + i}
                    checked={Boolean(userAnswers[i])}
                    onChange={handleInputChange(i)} />
                  <label className="game__check" htmlFor={answer.src + i}>Отметить</label>
                </div>
              </div>
            );
          })}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

QuestionGenre.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default QuestionGenre;
