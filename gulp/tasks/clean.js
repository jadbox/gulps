/**
 * Clean task
 *
 * Clean dist folder, gulp all caches and sass cache
 */
 
import path from 'path';
import gulp from 'gulp';
import del  from 'del';

function cleanTask(cb) {
    del([path.dirname('dist/gulps.js'), 'tmp'])
        .then(function _delThen(paths) {
            cb();
        });
}

gulp.task('clean', cleanTask);