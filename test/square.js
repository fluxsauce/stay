const Square = require('../lib/square');

module.exports = {
  fail: {
    invalidCoordinates(test) {
      test.expect(2);
      test.throws(() => new Square('fail', -1), TypeError);
      test.throws(() => new Square('1', 'fail'), TypeError);
      test.done();
    },
  },
  success: {
    validCoordinates(test) {
      test.expect(1);
      const square = new Square(1, 1);
      test.deepEqual(
        square,
        {
          coordinate: {
            x: 1,
            y: 1,
          },
        },
        'Unable to create valid Square'
      );
      test.done();
    },
    neighbors(test) {
      test.expect(1);
      const square = new Square(0, 0);
      test.deepEqual(
        square.neighbors(),
        [
          { x: 0, y: 1 },
          { x: 1, y: 0 },
          { x: 0, y: -1 },
          { x: -1, y: 0 },
        ],
        'Unable to determine Neighbors of a Square'
      );
      test.done();
    },
  },
};
