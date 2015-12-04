import gulp from 'gulp';
import mocha from 'gulp-mocha';
import handleErrors from './handleErrors';
import config from '../config';

export default () => {
    return gulp.src(['test/setup/node.js', 'test/unit/**/*.js'], {
            read: false
        })
        .pipe(mocha({
            reporter: 'spec',
            globals: config.mochaGlobals,
            ignoreLeaks: false
        }))
        .on('error', handleErrors);
};