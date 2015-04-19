describe('Line', function () {
  var Line;
  var Point;

  before(function (done) {
    Line = require('./index');
    Point = require('../Point');
    done();
  });

  it('creates a line from the equation', function () {
    var line = Line.createFromEquation(4, 3);
    line.slope.should.equal(4);
    line.yIntercept.should.equal(3);
  });

  it('creates a line from a slope and a point', function () {
    var point = Point.create(2, 2);
    var line = Line.createFromSlopeAndPoint(1, point);
    line.yIntercept.should.equal(0);
    line.slope.should.equal(1);
  });
});