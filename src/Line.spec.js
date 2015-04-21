describe('Line', function () {
  var Line;
  var Point;
  var Circle;

  before(function (done) {
    Line = require('./Line');
    Point = require('./Point');
    Circle = require('./Circle');
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
    var point = line1.intersectionWith(line2);
    point.x.should.equal(1);
    point.y.should.equal(1);
  });

  it('generates a point from an x coordinate', function () {
    var line = new Line(0.5, 0);
    var point = line.pointFromX(2);
    point.y.should.equal(1);
  });

  it('generates a point from a y coordinate', function () {
    var line = new Line(0.5, 0);
    var point = line.pointFromY(2);
    point.x.should.equal(4);
  });

  it('calculates no intersection with a circle', function () {
    var circle = new Circle(new Point(1, 1), 1);
    var line = new Line(0, 3);
    var point = line.intersectionWith(circle);
    expect(point).to.be.null;
  });

  it('calculates tangent intersection with a circle', function () {
    var circle = new Circle(new Point(1, 1), 1);
    var line = new Line(0, 2);
    var points = line.intersectionWith(circle);
    points.length.should.equal(1);
    points[0].x.should.equal(1);
    points[0].y.should.equal(2);
  });

  it('calculates secant intersection with a circle', function () {
    var circle = new Circle(new Point(1, 1), 1);
    var line = new Line(0, 1);
    var points = line.intersectionWith(circle);
    points.length.should.equal(2);
    points[0].x.should.equal(0);
    points[0].y.should.equal(1);
    points[1].x.should.equal(2);
    points[1].y.should.equal(1);
  });
});