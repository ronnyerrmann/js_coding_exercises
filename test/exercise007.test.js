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


describe("createRange", () => {
  test("returns a range from start to step with step between the values", () => {
    expect(createRange(1,5)).toEqual([1,2,3,4,5]);
    expect(createRange(2,8,2)).toEqual([2,4,6,8]);
  });
  test("check that it works with floats", () => {
    expect(createRange(1.3,5.5)).toEqual([1.3,2.3,3.3,4.3,5.3]);
    expect(createRange(2,10,2.5)).toEqual([2,4.5,7.0,9.5]);
  });
  test("check that it throws an error", () => {
    expect(() => {
      createRange();
      }).toThrow("start is required");
  });
});




