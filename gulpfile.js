/**
 * Created by apple on 17/2/22.
 */
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');

var sass = require('gulp-sass');
var watch = require('gulp-watch');
var del = require('del');



//监听文件变化

//编译scss

gulp.task('scss',function () {
    return gulp.src('./src/style/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./asserts/style/'));
})

gulp.task('watch',function () {
    gulp.watch('./src/style/scss/main.scss',function () {
        gulp.run('scss');
    })
})
