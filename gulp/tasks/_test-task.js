import gulp from 'gulp';
import mocha from 'gulp-mocha';
import _mocha from '../util/_mocha';

function _registerBabel() {
    require('babel-core/register');
}

function test() {
    _registerBabel();
    return _mocha();
}

gulp.task('test', test);