var gulp = require('gulp');

gulp.task('test', function () {
  return gulp.src('src/**/*.spec.js', { read: 'false' })
    .pipe(mocha({ reporter: 'min' }));
});