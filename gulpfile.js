'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');

gulp.task('default', ['style'], function () {
    gulp.watch('sass/**/*.scss', ['style']);
    gulp.watch("*.html").on('change', browserSync.reload);

    browserSync.init({
        server: './'
    });
});

gulp.task('imagemin', () =>
    gulp.src('img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('scripts', function () {
    gulp.src('js/**/*.js')
        .pipe(babel())
        .pipe(concat(app.js))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts-dist', function () {
    gulp.src('js/**/*.js')
        .pipe(sourcemaps().init())
        .pipe(babel())
        .pipe(concat(app.js))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('style', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass({
            outputStyle: "compressed"
        }).on('error', sass.logError)).pipe(autoPrefixer({
            browsers: ["last 2 versions"]
        })).pipe(gulp.dest('dist/css')).pipe(browserSync.stream());
});