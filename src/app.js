/**
 * Проверка имени пользователя
 * @param {string} name
 * @returns {boolean}
 */

export const nameIsValid = (name) =>
  !!name && name.length >= 2 && !name.includes(" ");

// // Передаем имя пользователя для проверки
// const userName = "Vasya";
// const isValid = nameIsValid(userName);

// // Выводим результат в консоль
// console.log(`Is the name "${userName}" valid? ${isValid}`);

/**
 * Удаление пробелов из строки
 *
 * @param {string} text
 * @returns {string}
 */

export const fullTrim = (text) => (text || "").replace(/\s/g, "");

// // Передаем имя пользователя для проверки
// const str = "";
// const isValid = fullTrim(str);

// // Выводим результат в консоль
// console.log(`the correct string is ${isValid}`);

/**
 * Подсчёт суммы заказа
 *
 * @param {[{quantity: number, name?: string, price: number}]} items
 * @param {number} discount
 * @example getTotal([{ price: 10, quantity: 10 }]) // 100
 * @example getTotal([{ price: 10, quantity: 1 }]) // 10
 * @example getTotal([{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }]) // 100
 * @example getTotal([{ price: 10, quantity: 0 }], { price: 10, quantity: 9 }) // 90
 * @example getTotal([{ price: 10, quantity: 10 }], 10) // 90
 * @example getTotal([{ price: 10, quantity: 10 }], 100) // 0
 */
export const getTotal = (items = [], discount = 0) => {
  if (typeof discount !== "number") {
    throw new Error("Скидка должна быть числом");
  }
  if (discount < 0) {
    throw new Error("Процент скидки не может быть отрицательным");
  }
  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return total - (total * discount) / 100;
};

// // Выводим результат в консоль
// const a = getTotal([{ price: 10, quantity: 10 }]); // 100
// const b = getTotal([{ price: 10, quantity: 1 }]); // 10
// const c = getTotal([
//   { price: 10, quantity: 1 },
//   { price: 10, quantity: 9 },
// ]); // 100
// // const d = getTotal([{ price: 10, quantity: 0 }], { price: 10, quantity: 9 }); // 90
// const e = getTotal([{ price: 10, quantity: 10 }], 10); // 90
// const f = getTotal([{ price: 10, quantity: 10 }], 100); // 0

// console.log(`the correct string is ${a}`);
// console.log(`the correct string is ${b}`);
// console.log(`the correct string is ${c}`);
// // console.log(`the correct string is ${d}`);
// console.log(`the correct string is ${e}`);
// console.log(`the correct string is ${f}`);
