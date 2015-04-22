describe('Point', function () {

  var Point;

  before(function (done) {
    Point = require('./Point');
    done();
  });

  it('is accessible', function () {
    var point = new Point(1, 2);
    point.x.should.equal(1);
    point.y.should.equal(2);
  });

  it('can find the closest point', function () {
    var p = new Point(5, 5);
    var points = [
      new Point(2, 2),
      new Point(3, 2),
      new Point(5, 4),
      new Point(4, 2)
    ];
    var closest = p.closest(points);
    closest.x.should.equal(5);
    closest.y.should.equal(4);
  });
});