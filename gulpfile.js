var gulp        = require('gulp');
var mocha       = require('gulp-mocha');
var docco       = require('gulp-docco');

gulp.task('test', function () {
  return gulp.src(['spec/config.js', 'src/**/*.spec.js'], { read: 'false' })
    .pipe(mocha({ reporter: 'min' }));
});

gulp.task('doc', function () {
  var options = {};
  return gulp.src(['src/**/*.js', '!src/**/*.spec.js'])
    .pipe(docco(options))
    .pipe(gulp.dest('doc'));
});