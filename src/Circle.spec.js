describe('Circle', function () {
  var Point;
  var Circle;

  before(function (done) {
    Point = require('./Point');
    Circle = require('./Circle');
    done();
  });

  it('initializes correctly', function () {
    var point = new Point(0, 0);
    var circle = new Circle(point, 2);
    circle.center.x.should.equal(0);
    circle.center.y.should.equal(0);
    circle.radius.should.equal(2);
  });
});