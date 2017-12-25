var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>{
    return gulp.src('source/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCss("css/style.css"))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/'));
});