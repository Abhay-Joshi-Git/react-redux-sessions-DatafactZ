var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var sass = require('gulp-sass');

gulp.task('js', ['clean'], function() {
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

gulp.task('style', ['clean'], function() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('build', ['clean', 'js', 'copy', 'style']);

gulp.task('serve', ['build'],  function() {
    gulp.src('dist')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
    gulp.watch(['src/**/*.js', 'src/**/*.scss'], ['build']);
});
