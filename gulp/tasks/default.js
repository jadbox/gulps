import gulp from 'gulp';

gulp.task('default', () => {
    return gulp.start('clean', 'dev');
});