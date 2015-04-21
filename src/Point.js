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

// Detects and returns the closest point
Point.prototype.closest = function (points) {
  if (!Array.isArray(points) || points.length === 0)
    return null;

  var distances = points.map(function (point) {
    return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
  });

  var index = distances.reduce(function (min, distance, index) {
    if (distance < min.value)
      min = { index: index, value: distance };

    return min;
  }, { index: 0, value: Number.MAX_VALUE }).index;

  return points[index];
};

module.exports = Point;