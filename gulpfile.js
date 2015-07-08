'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  browserSync.init({
    port: 8091,
    server: './'
  });

  gulp.watch('./**/*.js').on('change', browserSync.reload);
});
