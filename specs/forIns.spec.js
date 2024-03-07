// eslint-disable-next-line no-unused-vars
import { getScore1, getScore2, getScore3 } from "../src/foreIns.js";

// eslint-disable-next-line jest/no-disabled-tests
it.skip("function getScore1 returnes 16", () => {
  const result = getScore1();
  expect(result).toBe(16);
});

describe("getScore2 function", () => {
  test("should return the correct sum of scores", () => {
    expect(getScore2()).toBe(16); // 10 + 1 + 5 = 16
  });
  test("should handle an empty scores object", () => {
    const emptyScores = {};
    expect(getScore2(emptyScores)).toBe(0);
  });
  test("should handle negative scores", () => {
    const negativeScores = {
      Alice: -5,
      Bob: -2,
    };
    expect(getScore2(negativeScores)).toBe(-7);
  });
});
