/* eslint-disable jest/no-conditional-expect */
/* eslint-disable no-undef */
/* eslint-disable jest/no-disabled-tests */
import { getTotal } from "../src/app.js";

describe("getTotal function", () => {
  const data = [
    {
      items: [{ price: 10, quantity: 10 }],
      discount: 0,
    },
    {
      items: [{ price: 10, quantity: 1 }],
      discount: 0,
    },
    {
      // eslint-disable-next-line prettier/prettier
      items: [
        { price: 10, quantity: 1 },
        { price: 10, quantity: 9 },
      ],
      discount: 0,
    },
    {
      items: [{ price: 10, quantity: 0 }],
      discount: { price: 10, quantity: 9 },
    },
    {
      items: [{ price: 10, quantity: 10 }],
      discount: 10,
    },
    {
      items: [{ price: 10, quantity: 10 }],
      discount: 100,
    },
  ];

  // eslint-disable-next-line jest/no-done-callback
  test.skip(data)('should trow error if discount !== "number"', ({ data }) => {
    if (typeof discount !== "number") {
      expect(() => {
        getTotal(data);
      }).toThrow("Скидка должна быть числом");
    } else if (discount < 0) {
      expect(() => {
        getTotal(data);
      }).toThrow("Процент скидки не может быть отрицательным");
    } else {
      expect(result).toBeLessThan(100);
    }
  });
});
