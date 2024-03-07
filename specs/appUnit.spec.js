// eslint-disable-next-line no-unused-vars
import { nameIsValid, fullTrim, getTotal } from "../src/app.js";

/**
 * Для проверки функции nameIsValid, функция принимает string и возвращает bool
 * просят три проверки, никакой конкретики нет
 * в моем понимании юнит тестирование должно проверять функционал описанный в функции
 * в данной функции у нас написано условие !!name && name.length >= 2 && !name.includes(" ")
 * !!name => return bool
 * name.length >= 2 => return true
 * !name.includes(" ") => return true
 * на мой взгляд плохой пример функции именно для юнит тестирования
 * вот это например !!name => return bool
 * предлагаю обсудить на митинге
 */

describe("nameIsValid function", () => {
  it("if !name.includes(' ') nameIsValid function returns true", () => {
    const result = nameIsValid("John");
    expect(result).toBeTruthy();
  });

  test("if name.length >= 2 nameIsValid function returns true", () => {
    const result = nameIsValid("John");
    expect(result).toBeTruthy();
  });

  test("if not all conditions met nameIsValid function returns false", () => {
    const result = nameIsValid("Joh n");
    expect(result).toBeFalsy();
  });
});

/**
 * Для проверки функции fullTrim, функция принимает string с пробелами и возвращает string без пробелов
 * в данной функции идет проверка если  text равен null или undefined (text || "") возвращаем пустую строку
 * метод строки replace используется для замены всех символов пробела (\s) в строке на пустую строку ("".replace(/\s/g, "")
 * Регулярное выражение / \s /g означает, что мы ищем все вхождения символов пробела в строке.
 * С флагом g замена будет производиться для всех вхождений, а не только для первого.
 */

describe("fullTrim function", () => {
  it("if text is null or undefined (text || '') fullTrim function returns blanck string", () => {
    const result = fullTrim(" ");
    expect(result).toHaveLength(0);
  });

  test("if text contain only one space fullTrim function returns text without space", () => {
    const result = fullTrim("Jo hn");
    expect(result).not.toContain(" ");
    expect(result).toMatch("John");
    expect(result).toContain("John");
    expect(result).toStrictEqual("John");
  });

  test("if text contain more than one space fullTrim function returns text without space", () => {
    const result = fullTrim("Jo h ! n");
    expect(result).not.toContain(" ");
    expect(result).toMatch("Joh!n");
    expect(result).toContain("Joh!n");
    expect(result).toStrictEqual("Joh!n");
  });
});

/**
 * Для проверки функции getTotal, проверяем выкидыши ошибок и еще че то там
 */

describe("getTotal function", () => {
  it('getTotal function should trow error if discount !== "number"', () => {
    expect(() => {
      getTotal([{ price: 10, quantity: 0 }], { price: 10, quantity: 9 });
    }).toThrow("Скидка должна быть числом");
  });
  test("getTotal function should trow error if discount < 0", () => {
    expect(() => {
      getTotal([{ price: 10, quantity: 0 }], -3);
    }).toThrow("Процент скидки не может быть отрицательным");
  });
  test("getTotal function discount should be less tahn 100 and", () => {
    const result = getTotal([{ price: 10, quantity: 10 }], 10); // 90);
    expect(result).toBeLessThan(100);
    expect(result).not.toBeNull();
  });
});
