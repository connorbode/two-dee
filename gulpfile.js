var gulp        = require('gulp');
var mocha       = require('gulp-mocha');
var concat      = require('gulp-concat');
var docco       = require('gulp-docco');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var browserify  = require('browserify');
var globby      = require('globby');
var through     = require('through2');
var buffer      = require('vinyl-buffer');
var source      = require('vinyl-source-stream');

gulp.task('test', function () {
  return gulp.src(['spec/config.js', 'src/**/*.spec.js'], { read: 'false' })
    .pipe(mocha({ reporter: 'min' }));
});

gulp.task('concat', function () {
  return gulp.src(['src/**/*.js', '!src/**/*.spec.js'])
    .pipe(concat('two-dee.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('doc', function () {
  var options = {};
  return gulp.src(['src/**/*.js', '!src/**/*.spec.js'])
    .pipe(docco(options))
    .pipe(gulp.dest('doc'));
});

gulp.task('uglify', function () {
  return gulp.src(['dist/two-dee.js'])
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('bundle', function () {
  var bundleStream = through();

  bundleStream
    .pipe(source('./main.js'))
    .pipe(buffer())
    .pipe(rename(function (path) {
      path.basename = 'two-dee';
    }))
    .pipe(gulp.dest('./dist'));

  globby(['./main.js'], function (err, files) {
    var b = browserify({
      entries: files
    });

    b.bundle().pipe(bundleStream);
  });

  return bundleStream;
});

gulp.task('build', ['bundle', 'doc', 'uglify']);