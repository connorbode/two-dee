var Point = require('./Point');

// Line
// ----
//
// A line can be constructed by supplying
// the slope and a y-intercept.
var Line = function (slope, yIntercept) {
  this.slope      = slope;
  this.yIntercept = yIntercept;
  this._type = 'Line';

  // Returns a point that represents the
  // intersection of this line with
  // another line.
  var intersectionWithLine = function (line) {
    var x = (this.yIntercept - line.yIntercept) / (line.slope - this.slope);
    var y = this.slope * x + this.yIntercept;
    return new Point(x, y);
  }.bind(this);

  // Returns a point that represents
  // the intersection of this line with
  // another object
  this.intersectionWith = function (other) {
    switch (other._type) {
      case "Line":
        return intersectionWithLine(other);
        break;
    }
  };
};

// A line can also be constructed from
// a slope and a point on the line
Line.fromSlopeAndPoint = function (slope, point) {
  var yIntercept = point.y + slope * (-point.x);
  return new Line(slope, yIntercept);
};

// A line can also be constructed from two
// points
Line.fromPoints = function (p1, p2) {
  var slope = (p2.y - p1.y) / (p2.x - p1.x);
  return Line.fromSlopeAndPoint(slope, p1);
};

module.exports = Line;