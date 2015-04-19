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
  }
};

module.exports = LineConstructors;