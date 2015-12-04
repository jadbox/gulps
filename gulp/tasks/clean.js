/**
 * Clean task
 */
import gulp from 'gulp';
import del from 'del';
import config from '../config';

gulp.task('clean', function() {
    del([config.distDir, 'tmp']).then(paths => {
//        console.log('Removed old files. Ready to go...!');
    });
});