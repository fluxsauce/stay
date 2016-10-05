const Coordinate = require('../lib/coordinate');
const Grid = require('../lib/grid');
const Square = require('../lib/square');

module.exports = {
  setUp(callback) {
    const faces = [
      new Square(new Coordinate(0, 0), [
        'E',
      ], {
        start: true,
      }),
      new Square(new Coordinate(1, 0), [
        'W',
        'E',
      ]),
      new Square(new Coordinate(2, 0), [
        'W',
      ], {
        end: true,
      }),
    ];
    this.grid = new Grid(faces);
    callback();
  },
  fail: {
    invalidBoundary(test) {
      test.expect(1);
      test.throws(() =>
        this.grid.boundary('F'), TypeError, 'Failed to throw TypeError for invalid boundary'
      );
      test.done();
    },
  },
  success: {
    create(test) {
      test.expect(4);
      test.equals(this.grid.boundary('N'), 0, 'Failed to determine North boundary');
      test.equals(this.grid.boundary('S'), 0, 'Failed to determine South boundary');
      test.equals(this.grid.boundary('E'), 2, 'Failed to determine East boundary');
      test.equals(this.grid.boundary('W'), 0, 'Failed to determine West boundary');
      test.done();
    },
  },
};
