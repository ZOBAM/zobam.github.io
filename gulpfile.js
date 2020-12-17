var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', async function(done) {
    gulp.src('style/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style'));
        done();
});

//Watch task
gulp.task('default',function() {
    return gulp.watch('style/sass/**/*.scss',gulp.series('styles'));
});