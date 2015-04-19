// Point
// -----
// 
// A point is simply a point on the 2D canvas.

var Point = function () {
  this.x = null;
  this.y = null;
  this._type = 'Point';
}

module.exports = {

  // Creates a point using its `x` and `y` coordinates
  create: function (x, y) {
    var point = new Point();
    point.x = x;
    point.y = y;
    return point;
  }
};