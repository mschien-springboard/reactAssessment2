const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("handles different size squares", function () {
    const threeByThree = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ];
    const threeByThreeUnrolled = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(unroll(threeByThree)).toEqual(threeByThreeUnrolled);

    const fourByFour = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7]
    ];
    const fourByFourUnrolled = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    expect(unroll(fourByFour)).toEqual(fourByFourUnrolled);

  });

});
