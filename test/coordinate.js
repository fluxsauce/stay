const Coordinate = require('../lib/coordinate');

module.exports = {
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
  },
  success: {
    validCoordinates(test) {
      test.expect(1);
      const coordinate = new Coordinate(1, 1);
      test.deepEqual(
        coordinate,
        {
          x: 1,
          y: 1,
        },
        'Unable to create valid Coordinate'
      );
      test.done();
    },
  },
};
