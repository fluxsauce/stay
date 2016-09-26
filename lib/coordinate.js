const _ = require('lodash');
const debug = require('debug')('coordinate');


/**
 * Representation of a Cartesian coordinate.
 */
class Coordinate {
  /**
   * @constructor
   * @param {number} x
   *   The X cartesian coordinate.
   * @param {number} y
   *   The Y cartesian coordinate.
   */
  constructor(x, y) {
    debug(`Constructor x: "${x}", y: "${y}"`);
    Coordinate.validateCoordinateValue(x);
    this.x = x;
    Coordinate.validateCoordinateValue(y);
    this.y = y;
    debug(`Validated x: "${x}", y: "${y}"`);
  }

  /**
   * Validate a cartesian coordinate.
   *
   * @param {*} value
   *   The value to be tested.
   * @throws TypeError
   *   Invalid coordinate.
   * @returns {void}
   */
  static validateCoordinateValue(value) {
    if (_.isUndefined(value)) {
      throw new TypeError('Undefined coordinate value');
    }

    if (parseInt(Number(value), 10) !== value) {
      throw new TypeError(`Invalid coordinate "${value}"`);
    }
  }
}

module.exports = Coordinate;
