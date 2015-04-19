var Line = function (slope, yIntercept) {
  this.slope      = slope;
  this.yIntercept = yIntercept;
}

var LineConstructors = {

  // Creates a line given the `slope`
  // and the `yIntercept`
  createFromEquation: function (slope, yIntercept) {
    return new Line(slope, yIntercept);
  }
};

module.exports = LineConstructors;