/**
 * Проверка корректен ли ответ на вопрос об исполнителе
 * @param {Object} question - Вопрос об исполнителе
 * @param {String} userAnswer - Ответ пользователя
 * @return {Boolean} Верен ли ответ
 */
export const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer === question.song.artist;
};


/**
 * Проверка корректен ли ответ на вопрос о жанре
 * @param {Object} question - Вопрос о жанре
 * @param {Object} userAnswer - Ответ пользователя
 * @return {Boolean} Верен ли ответ
 */
export const isGenreAnswerCorrect = (question, userAnswer) => {
  return Object.entries(userAnswer)
    .every(([key, value]) => {
      return value === (question.answers[key].genre === question.genre);
    });
};
