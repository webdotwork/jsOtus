/*
Функция getScore принимает на вход объект. В котором ключ это ник, а значение это успеваемость.
Функция getScore возвращает в ответ сумму всех баллов.
Using reduce
*/
export const getScore1 = () => {
  const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
  };
  return Object.keys(scores).reduce(
    (sum, key) => sum + parseInt(scores[key]),
    0,
  );
};
console.log("getscore1 one is:", getScore1());

/**
 *
 * @returns
 */
export const getScore2 = () => {
  const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
  };
  let sum = 0;
  for (let i = 0; i < Object.keys(scores).length; i++) {
    const key = Object.keys(scores)[i];
    const value = scores[key];
    sum += value;
  }
  return sum;
};
console.log("getscore2 one is:", getScore2());

/**
 *
 * @returns
 */
export const getScore3 = () => {
  const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
  };
  let sum = 0;
  for (let key in scores) {
    let value = scores[key];
    sum += value;
  }
  return sum;
};
console.log("getscore3 one is:", getScore3());

/**
 *
 * @returns
 */
export const getScore4 = () => {
  const scores = [
    {
      Anna: 10,
      Olga: 1,
      Ivan: 5,
    },
  ];
  let sum = 0;
  for (let scoreObj of scores) {
    for (let key in scoreObj) {
      let value = scoreObj[key];
      sum += value;
    }
  }
  return sum;
};
console.log("getscore4 one is:", getScore4());
