/**
 * Abstract representation of a Shape.
 */
class Shape {
  /**
   * @constructor
   */
  constructor() {
    if (new.target.name === 'Shape') {
      throw new Error(`Abstract class "${new.target.name}" cannot be instantiated directly.`);
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
