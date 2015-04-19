var Line = function (slope, yIntercept) {
  this.slope      = slope;
  this.yIntercept = yIntercept;
}

var LineConstructors = {

  // Creates a line given the `slope`
  // and the `yIntercept`
  createFromEquation: function (slope, yIntercept) {
    return new Line(slope, yIntercept);
  },

  // Creates a line from the `slope` of 
  // the line and a `point` on the line
  createFromSlopeAndPoint: function (slope, point) {
    var yIntercept = point.y + slope * (-point.x);
    return new Line(slope, yIntercept);
  },

  // Creates a line from two Points, `p1` and `p2`
  createFromPoints: function (p1, p2) {
    var slope = (p2.y - p1.y) / (p2.x - p1.x);
    return LineConstructors.createFromSlopeAndPoint(slope, p1);
  }
};

module.exports = LineConstructors;