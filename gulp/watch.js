'use strict';

var gulp = require('gulp');

gulp.task('watch', ['wiredep', 'styles'] ,function () {
  gulp.watch('app/**/*.scss', ['styles']);
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
