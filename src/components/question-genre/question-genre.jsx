import React, {useState} from "react";
import PropTypes from "prop-types";

import GameHeader from "../../components/game-header/game-header.jsx";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";

const QuestionGenre = (props) => {
  const {question, mistakes, onAnswer} = props;
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
      <GameHeader mistakes={mistakes} />

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
  mistakes: PropTypes.number.isRequired,
};

export default QuestionGenre;
