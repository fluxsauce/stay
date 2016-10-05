const Coordinate = require('../lib/coordinate');

module.exports = {
  setUp(callback) {
    this.coordinate = new Coordinate(0, 0);
    callback();
  },
  fail: {
    invalidCoordinates(test) {
      test.expect(2);
      test.throws(() => new Coordinate('fail', -1), TypeError);
      test.throws(() => new Coordinate('1', 'fail'), TypeError);
      test.done();
    },
    undefinedCoordinates(test) {
      test.expect(3);
      test.throws(() => new Coordinate(), TypeError);
      test.throws(() => new Coordinate('1'), TypeError);
      test.throws(() => new Coordinate(undefined, '1'), TypeError);
      test.done();
    },
    invalidAdjacent(test) {
      test.expect(1);
      test.throws(() => this.coordinate.adjacent('F'));
      test.done();
    },
  },
  success: {
    validCoordinates(test) {
      test.expect(1);
      test.deepEqual(
        this.coordinate,
        {
          x: 0,
          y: 0,
        },
        'Unable to create valid Coordinate'
      );
      test.done();
    },
  },
};
