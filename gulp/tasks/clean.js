/**
 * Clean task
 *
 * Clean dist folder
 */
import gulp from 'gulp';
import del from 'del';
import config from '../config';

gulp.task('clean', function() {
    del([config.distDir, 'tmp'])
});