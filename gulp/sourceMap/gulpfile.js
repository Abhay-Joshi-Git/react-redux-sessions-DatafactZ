var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var babelify = require('babelify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', ['clean'], function() {
  var bundler = browserify({
    entries: ['./src/app.js'],
    extensions: ['.js'],
    debug: true
  })
  .transform('babelify', {
      presets: ['es2015', 'react', 'stage-2', 'stage-3'],
      sourceMaps: true
  });
  //.transform('reactify', {'es6': true})

  return bundler
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
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
