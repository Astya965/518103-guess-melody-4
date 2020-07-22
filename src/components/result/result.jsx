import React from "react";
import PropTypes from "prop-types";

const Result = (props) => {
  const {isSuccess, right, mistakes, onResetButtonClick} = props;

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="result__title">
        {isSuccess ?
          `Вы настоящий меломан!`
          : `Какая жалость!`}
      </h2>
      <p className={`result__total ${isSuccess ? `` : `result__total--fail`}`}>
        {isSuccess ?
          `Вы ответили правильно на ${right} вопросов и совершили ${mistakes} ошибки`
          : `У вас закончились все попытки. Ничего, повезёт в следующий раз!`}
      </p>
      <button className="replay" type="button" onClick={onResetButtonClick}>
        Попробовать ещё раз
      </button>
    </section>
  );
};

Result.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  right: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onResetButtonClick: PropTypes.func.isRequired,
};

Result.defaultProps = {
  right: 0,
  mistakes: 0,
};

export default Result;

