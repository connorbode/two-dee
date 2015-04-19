// Point
// -----
// 
// A point is simply a point on the 2D canvas.
//
// A point can be created by supplying its
// `x` and `y` coordinates.
var Point = function (x, y) {
  this.x = x;
  this.y = y;
  this._type = 'Point';
};

module.exports = Point;