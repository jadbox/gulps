import gulp from 'gulp';
import _mocha from '../util/_mocha'; // shared between coverage and this file
import runSequence from 'run-sequence';

gulp.task('test', ['lint:test'], function() {
    return _mocha();
});
