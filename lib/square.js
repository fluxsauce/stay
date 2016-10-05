const Shape = require('./shape');

/**
 * Representation of a Square.
 */
class Square extends Shape {
  /**
   * @constructor
   * @inheritDoc
   */
  constructor(coordinate, connections = [], options = {}) {
    super(coordinate, connections, options);
  }

  /**
   * Determine neighbors of a Square.
   *
   * @returns {[Coordinate]}
   *   An array of Coordinates.
   */
  neighbors() {
    return [
      this.coordinate.adjacent('N'),
      this.coordinate.adjacent('S'),
      this.coordinate.adjacent('E'),
      this.coordinate.adjacent('W'),
    ];
  }
}

module.exports = Square;
