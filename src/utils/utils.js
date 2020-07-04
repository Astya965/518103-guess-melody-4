/**
 * Копирования значений всех собственных перечисляемых свойств исходных объектов (a и b) в целевой объект
 * @param {Object} a - Исходный объект
 * @param {Object} b - Исходный объект
 * @return {Object} Получившийся целевой объект
 */
export const extendObject = (a, b) => Object.assign({}, a, b);
