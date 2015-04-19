describe('Point', function () {

  var Point;

  before(function (done) {
    Point = require('./index');
    done();
  });

  it('is accessible', function () {
    var point = Point.create(1, 2);
    point.x.should.equal(1);
    point.y.should.equal(2);
  });
});