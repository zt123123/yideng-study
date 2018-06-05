var gulp = require('gulp'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename');

gulp.task('taskES6', function(){
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename({suffix: '_es6'}))
        .pipe(gulp.dest('build'));
});
gulp.task('startWatch', function(){
    gulp.watch('src/js/*.js', ['taskES6']);
});