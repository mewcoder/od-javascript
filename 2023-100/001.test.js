const solution = require("./001.js");

describe("solution", () => {
  test("1", () => {
    const result = solution(5, 6, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result).toEqual("4 5 6 7 8");
  });

  test("2", () => {
    const result = solution(4, 6, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(result).toEqual("4 5 6 7");
  });

  test("3", () => {
    const result = solution(3, 1000, [30, 30, 200, 500, 70, 300]);
    expect(result).toEqual("200 300 500");
  });
});
