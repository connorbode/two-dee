var gulp    = require('gulp');
var mocha   = require('gulp-mocha');
var concat  = require('gulp-concat');

gulp.task('test', function () {
  return gulp.src(['spec/config.js', 'src/**/*.spec.js'], { read: 'false' })
    .pipe(mocha({ reporter: 'min' }));
});

gulp.task('concat', function () {
  return gulp.src(['src/**/*.js', '!src/**/*.spec.js'])
    .pipe(concat('two-dee.js'))
    .pipe(gulp.dest('dist'));
});