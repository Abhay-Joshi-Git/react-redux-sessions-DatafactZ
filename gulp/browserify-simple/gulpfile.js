var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  var bundler = browserify({
    entries: ['./src/app.js'],
    transform: [reactify],
    extensions: ['.js']
  });

  function build() {
    return bundler
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('./dist/'))
  };
  build();
});
