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

describe("getScreentimeAlertList", () => {
  test("returns the usernames that have used more than 100 minutes screen time", () => {
    const users = [
      {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
                  { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                  { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                  { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                  { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                 ]
      },
      {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
                  { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                  { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                  { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                  { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                  { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                  { date: "2019-06-14", usage: { twitter: 28, instagram: 25, facebook: 19} },
                 ]
      },
      {
      username: "no_data",
      name: "No Data",
      },
      {
      name: "No Username",
      screenTime: [
                  { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                  { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                  { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                  { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                  { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                 ]
      },
    ];

    expect(getScreentimeAlertList(users,"2018-01-01")).toEqual([]);
    expect(getScreentimeAlertList(users,"2019-05-01")).toEqual([]);
    expect(getScreentimeAlertList(users,"2019-05-02")).toEqual(["beth_1234", "sam_j_1989"]);
    expect(getScreentimeAlertList(users,"2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users,"2019-06-11")).toEqual([]);
    expect(getScreentimeAlertList(users,"2019-06-14")).toEqual(["sam_j_1989"]);
  });
});

describe("hexToRGB", () => {
  test("check that it throws an error", () => {
    expect(() => {
      hexToRGB();
      }).toThrow("hexStr is required");
  });
  test("check that it throws an error", () => {
    expect(() => {
      hexToRGB("000000");
      }).toThrow("hexStr is required, starting with #");
  });
  test("check that it throws an error", () => {
    expect(() => {
      hexToRGB("%000000");
      }).toThrow("hexStr is required, starting with #");
  });
  test("check that it throws an error", () => {
    expect(() => {
      hexToRGB("#00000G");
      }).toThrow("hexStr is required");
  });
  test("returns the rgb value of a HEX colour", () => {
    expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
    expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
  });
  
});

describe("findWinner", () => {
  test("check that it throws an error", () => {
    expect(() => {
      findWinner();
      }).toThrow("board is required");
  });
  test('return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner', () => {
    let board = [
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"]
    ];
    expect(findWinner(board)).toBe("X");
    board = [
        ["X", "0", null],
        ["0", "0", "0"],
        ["X", null, "0"]
    ];
    expect(findWinner(board)).toBe("0");
    board = [
        ["X", "0", null],
        ["0", "X", "0"],
        ["X", null, "0"]
    ];
    expect(findWinner(board)).toBe(null);
    board = [
        ["X", "X", "X"],
        ["X", null, "0"],
        ["X", null, "0"]
    ];
    expect(findWinner(board)).toBe("X");
  });
  test("check that it throws an error if both players won", () => {
    const board = [
        ["X", "0", "0"],
        ["X", "X", "0"],
        ["X", null, "0"]
    ];
    expect(() => {
      findWinner(board);
      }).toThrow("both players won");
  });
});


