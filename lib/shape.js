/**
 * Abstract representation of a Shape.
 */
class Shape {
  /**
   * @constructor
   * @param {Coordinate} coordinate
   *   The X, Y cartesian coordinates of the face.
   * @param {Array} [connections]
   *   Connections, if any, to the Shape.
   * @param {Object} [options]
   *   Options for configuring the Shape.
   * @param {Object} [options.start]
   *   Indicates this Shape is the starting position.
   * @param {Object} [options.end]
   *   Indicates this Shape is the ending position.
   */
  constructor(coordinate, connections = [], options = {}) {
    if (new.target.name === 'Shape') {
      throw new Error(`Abstract class "${new.target.name}" cannot be instantiated directly.`);
    }
    this.coordinate = coordinate;
    this.connections = connections;

    if (options.start) {
      this.start = true;
    }
    if (options.end) {
      this.end = true;
    }
  }

  /**
   * Determine neighbors of the Shape.
   *
   * @returns {[Coordinate]}
   *   An array of Coordinates.
   */
  neighbors() { // eslint-disable-line no-unused-vars
    throw Error(`neighbors has not been implemented yet on ${this.constructor.name}`);
  }
}

module.exports = Shape;
