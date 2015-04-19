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

  it('creates a line from two points', function () {
    var p1 = Point.create(2, 2);
    var p2 = Point.create(3, 3);
    var line = Line.createFromPoints(p1, p2);
    line.yIntercept.should.equal(0);
    line.slope.should.equal(1);
  });

  it('calculates the intersection with another line', function () {
    var line1 = Line.createFromEquation(-1, 2);
    var line2 = Line.createFromEquation(1, 0);
    var point = line1.intersectionWithLine(line2);
    point.x.should.equal(1);
    point.y.should.equal(1);
  });
});