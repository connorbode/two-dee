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
});