const Shape = require('./shape');
const Coordinate = require('./coordinate');

/**
 * Representation of a Square.
 */
class Square extends Shape {
  /**
   * @constructor
   * @param {number} x
   *   The X cartesian coordinate of the face.
   * @param {number} y
   *   The Y cartesian coordinate of the face.
   */
  constructor(x, y) {
    super();
    this.coordinate = new Coordinate(x, y);
  }

  /**
   * Determine neighbors of a Square.
   *
   * @returns {[Coordinate]}
   *   An array of Coordinates.
   */
  neighbors() {
    return [
      new Coordinate(this.coordinate.x, this.coordinate.y + 1),
      new Coordinate(this.coordinate.x + 1, this.coordinate.y),
      new Coordinate(this.coordinate.x, this.coordinate.y - 1),
      new Coordinate(this.coordinate.x - 1, this.coordinate.y),
    ];
  }
}

module.exports = Square;
