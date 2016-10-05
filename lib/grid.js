const _ = require('lodash');

/**
 * Representation of the Game Board.
 */
class Grid {
  /**
   * @constructor
   * @param {Array} [faces]
   */
  constructor(faces) {
    this.faces = faces;
  }

  /**
   * Determine boundaries of a map.
   *
   * @param {string} direction
   *   N, S, E, W.
   * @returns {number}
   *   The maximum coordinate in a particular direction.
   */
  boundary(direction) {
    let x = [];
    let y = [];
    this.faces.forEach((shape) => {
      x.push(shape.coordinate.x);
      y.push(shape.coordinate.y);
    });
    x = _.uniq(x.sort());
    y = _.uniq(y.sort());
    switch (direction) {
      case 'N':
        return y.pop();
      case 'S':
        return y.shift();
      case 'E':
        return x.pop();
      case 'W':
        return x.shift();
      default:
        throw new TypeError(`Unknown direction "${direction}"`);
    }
  }
}

module.exports = Grid;
