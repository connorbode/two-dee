before(function (done) {
  global.chai = require('chai');
  global.assert = chai.assert;
  global.expect = chai.expect;
  global.should = chai.should();
  done();
});