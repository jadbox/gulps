import gulp from 'gulp';

function defaultTask() {
    return gulp.start('dev');
}

gulp.task('default', defaultTask);