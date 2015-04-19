describe('Line', function () {
  var Line;

  before(function (done) {
    Line = require('./index');
    done();
  });

  it('creates a line from the equation', function () {
    var line = Line.createFromEquation(4, 3);
    line.slope.should.equal(4);
    line.yIntercept.should.equal(3);
  });
});