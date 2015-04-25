var solveQuadraticEquation  = require('solve-quadratic-equation');
var Point                   = require('./Point');

// Line
// ----
//
// A line can be constructed by supplying
// the slope and a y-intercept.
var Line = function (slope, yIntercept, xIntercept) {
  this.slope      = slope;
  this.xIntercept = xIntercept;
  this.yIntercept = yIntercept;
  this._type = 'Line';

  // Generates a Point on the Line
  // given a `y` value
  this.pointFromY = function (y) {
    var x = (y - yIntercept) / slope;
    return new Point(x, y);
  };

  // Generates a Point on the Line
  // given an `x` value
  this.pointFromX = function (x) {
    var y = slope * x + yIntercept;
    return new Point(x, y);
  };

  // Returns a point that represents the
  // intersection of this Line with
  // another Line.
  var intersectionWithLine = function (line) {
    var x = (this.yIntercept - line.yIntercept) / (line.slope - this.slope);
    var y = this.slope * x + this.yIntercept;
    return new Point(x, y);
  }.bind(this);

  // Calculates the intersection of this Line
  // with a Circle.  Returns null if there is
  // no intersection.  Otherwise, an array
  // containing one or two points will be
  // returned.
  var intersectionWithCircle = function (circle) {

    // solve for x
    var polynomial = [];
    polynomial[0] = Math.pow(this.slope, 2) + 1;
    polynomial[1] = 2 * (this.slope * (this.yIntercept - circle.center.y) - circle.center.x);
    polynomial[2] = Math.pow(this.yIntercept - circle.center.y, 2) 
                  + Math.pow(circle.center.x, 2) 
                  - Math.pow(circle.radius, 2);

    var roots = solveQuadraticEquation(polynomial[0], polynomial[1], polynomial[2]);

    if (roots.length === 0)
      return null;

    return roots.map(function (root) {
      return this.pointFromX(root);
    }.bind(this));

  }.bind(this);

  // Returns a point that represents
  // the intersection of this line with
  // another object
  this.intersectionWith = function (other) {
    switch (other._type) {
      case "Line":
        return intersectionWithLine(other);
      case "Circle":
        return intersectionWithCircle(other);
    }
  };
};

// A line can also be constructed from
// a slope and a point on the line
Line.fromSlopeAndPoint = function (slope, point) {
  var xIntercept;
  var yIntercept;

  if (slope === Infinity) {
    yIntercept = NaN;
    xIntercept = point.x;
  }
  else
    yIntercept = point.y + slope * (-point.x);
  return new Line(slope, yIntercept, xIntercept);
};

// A line can also be constructed from two
// points
Line.fromPoints = function (p1, p2) {
  var slope = (p2.y - p1.y) / (p2.x - p1.x);
  return Line.fromSlopeAndPoint(slope, p1);
};

module.exports = Line;