const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("returns the sum of all its digits in a number", () => {
    expect(sumDigits(12345)).toBe(15);
    expect(sumDigits(40320)).toBe(9);
  });
});


describe("createMatrix", () => {
  test("returns a Matrix with n by n elements, filled with 'fill' ", () => {
    expect(createMatrix(2,1)).toEqual([[1,1], [1,1]]);
    expect(createMatrix(1,"fill")).toEqual([["fill"]]);
  });
});




