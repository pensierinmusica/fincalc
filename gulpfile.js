'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

// Utility to ignore Node modules and Bower components
// when generating the glob patterns array for gulp.src()
function addDefSrcIgnore (srcArr) {
  return srcArr.concat([
    '!coverage{,/**}',
    '!node_modules{,/**}',
    '!private{,/**}',
    '!.git{,/**}',
    '!**/.DS_Store'
  ]);
}

// JavaScript and JSON linter
gulp.task('lint', function () {
  return gulp.src(addDefSrcIgnore(['**/*.js', '*.json']), {dot: true})
    .pipe($.eslint({dotfiles: true}))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});
