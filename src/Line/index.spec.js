describe('Line', function () {
  var Line;
  var Point;

  before(function (done) {
    Line = require('./index');
    Point = require('../Point');
    done();
  });

  it('creates a line from the equation', function () {
    var line = new Line(4, 3);
    line.slope.should.equal(4);
    line.yIntercept.should.equal(3);
  });

  it('creates a line from a slope and a point', function () {
    var point = new Point(2, 2);
    var line = Line.fromSlopeAndPoint(1, point);
    line.yIntercept.should.equal(0);
    line.slope.should.equal(1);
  });

  it('creates a line from two points', function () {
    var p1 = new Point(2, 2);
    var p2 = new Point(3, 3);
    var line = Line.fromPoints(p1, p2);
    line.yIntercept.should.equal(0);
    line.slope.should.equal(1);
  });

  it('calculates the intersection with another line', function () {
    var line1 = new Line(-1, 2);
    var line2 = new Line(1, 0);
    var point = line1.intersectionWithLine(line2);
    point.x.should.equal(1);
    point.y.should.equal(1);
  });
});