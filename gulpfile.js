var gulp  = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
  return gulp.src(['spec/config.js', 'src/**/*.spec.js'], { read: 'false' })
    .pipe(mocha({ reporter: 'min' }));
});