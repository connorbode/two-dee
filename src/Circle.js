
// Circle
// ------
//
// A Circle can be created by providing
// `center`, the Point at which the circle
// is centered, and `radius`, the radius
// of the circle.
//
var Circle = function (center, radius) {
  this.center = center;
  this.radius = radius;
  this._type = 'Circle';
};

module.exports = Circle;