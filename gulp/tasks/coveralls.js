/**
 * Watch task
 *
 * Watch all changes in source folder and launch task accordingly
 */
import gulp from 'gulp';
import coveralls from 'gulp-coveralls';

// Only for Travis - you can't use it locally
gulp.task('coveralls', () => {
    gulp.src('coverage/lcov.info')
        .pipe(coveralls());
});