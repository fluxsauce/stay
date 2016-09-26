const Shape = require('../lib/shape');

module.exports = {
  fail: {
    abstract(test) {
      test.expect(1);
      test.throws(() => new Shape(), Error);
      test.done();
    },
    unimplementedNeighbors(test) {
      /**
       * Test class.
       */
      class Fail extends Shape {}
      const fail = new Fail();
      test.throws(() => fail.neighbors(), Error);
      test.done();
    },
  },
  success: {
  },
};
