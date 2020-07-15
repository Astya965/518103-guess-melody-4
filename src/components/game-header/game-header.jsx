import React from "react";
import {useSelector} from "react-redux";

import Mistakes from "../mistakes/mistakes.jsx";
import {getMistakes} from "../../store/selectors.js";

const GameHeader = () => {
  const mistakes = useSelector(getMistakes);

  return (
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
        <Mistakes count={mistakes} />
      </div>
    </header>
  );
};

export default GameHeader;
