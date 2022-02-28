const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("check that it throws an error if nothing is given", () => {
    expect(() => {
      sumMultiples();
      }).toThrow("arr is required");
  });
  test("check that it throws an error if no array is given", () => {
    expect(() => {
      sumMultiples("notAnArray");
      }).toThrow("arr is required");
  });
  test("returns the sum of any numbers in an array which are a multiple of 3 or 5", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([7, 8, 1])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("returns true/false depending on whether a string is a valid DNA string", () => {
    expect(isValidDNA("ATCTGGCTA")).toBe(true);
    expect(isValidDNA("ATCTGGCTAD")).toBe(false);
    expect(isValidDNA("DATCTGGCTA")).toBe(false);
  });
  test("lower case is not allowed either", () => {
    expect(isValidDNA("ATCTGgCTA")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("returns a string of the complementary base pairs of DNA", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
  });
});

describe("isItPrime", () => {
  test("returns true/false depending on whether the number is a prime", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(6)).toBe(false);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(9)).toBe(false);
    expect(isItPrime(11)).toBe(true);
  });
  test("test some big numbers", () => {
    expect(isItPrime(8003)).toBe(false);
    expect(isItPrime(8007)).toBe(false);
    expect(isItPrime(8009)).toBe(true);
    expect(isItPrime(8011)).toBe(true);
    
  });
});

describe("createMatrix", () => {
  test("returns a Matrix with n by n elements, filled with 'fill' ", () => {
    expect(createMatrix(2,1)).toEqual([[1,1], [1,1]]);
    expect(createMatrix(1,"fill")).toEqual([["fill"]]);
  });
});

describe("areWeCovered", () => {
  test("returns true/false depending on whether there are enough staff scheduled for the given day", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Susan", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Peter", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });
});


