var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');

gulp.task('js', function() {
  var bundler = browserify({
    entries: ['./src/app.js'],
    transform: [reactify],
    extensions: ['.js']
  });

  return bundler
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('clean', function(){
    return gulp.src('./dist/')
        .pipe(clean())
})

gulp.task('copy', ['clean'], function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'))
});

gulp.task('build', ['js', 'copy']);

gulp.task('serve', ['build'],  function() {
    gulp.src('dist')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
    gulp.watch('src/**/*.js', ['build']);
});
