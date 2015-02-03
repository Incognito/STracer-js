var gulp = require('gulp');
var jscs = require('gulp-jscs');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function() {
  // Default code
});

// TODO: Tests, build

// Lint JavaScript
gulp.task('jshint', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Code standards
gulp.task('jscs', function() {
  return gulp.src('src/*.js')
    .pipe(jscs());
});

