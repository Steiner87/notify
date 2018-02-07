var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();


gulp.task('default', () => {
    return watch('sass/**/*.sass', () => {
        gulp.src('sass/style.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('bundle.css'))
            .pipe(minify())
            .pipe(rename('bundle.min.css'))
            .pipe(gulp.dest('css'))
            .pipe(notify('Good job! Well done!'))
    });
});