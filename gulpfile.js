const gulp = require('gulp');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const touch = require('gulp-touch-cmd');
const concat = require('gulp-concat-util');

gulp.task('clean', function () {
  return gulp.src('dist', { read: false, allowEmpty: true }).pipe(clean());
});

gulp.task('assets', () => {
  return gulp.src(['src/assets/**']).pipe(gulp.dest('dist/cjs/assets')).pipe(gulp.dest('dist/esm/assets')).pipe(touch());
});

gulp.task('minify-css', () => {
  return gulp
    .src('dist/css/*.css')
    .pipe(concat('index.min.css'))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('components', () => {
  return gulp.src(['src/components/**/*.scss']).pipe(gulp.dest('dist/cjs/components')).pipe(gulp.dest('dist/esm/components')).pipe(touch());
});

gulp.task('scss', () => {
  return gulp.src(['src/styles/**']).pipe(gulp.dest('dist/cjs/styles')).pipe(gulp.dest('dist/esm/styles')).pipe(touch());
});
