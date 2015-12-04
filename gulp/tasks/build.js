import gulp from 'gulp';

gulp.task('build', () => {
    return gulp.start('dev', 'prod');
});