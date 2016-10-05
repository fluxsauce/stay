const Square = require('../lib/square');
const Coordinate = require('../lib/coordinate');

module.exports = {
  fail: {

  },
  success: {
    validCoordinates(test) {
      test.expect(1);
      const square = new Square(new Coordinate(1, 1));
      test.deepEqual(
        square,
        {
          coordinate: {
            x: 1,
            y: 1,
          },
          connections: [],
        },
        'Unable to create valid Square'
      );
      test.done();
    },
    neighbors(test) {
      test.expect(1);
      const square = new Square(new Coordinate(0, 0));
      test.deepEqual(
        square.neighbors(),
        [
          { x: 0, y: 1 },
          { x: 0, y: -1 },
          { x: 1, y: 0 },
          { x: -1, y: 0 },
        ],
        'Unable to determine Neighbors of a Square'
      );
      test.done();
    },
  },
};
