import gulp from 'gulp';
import mocha from 'gulp-mocha';
import handleErrors from './handleErrors';
import config from '../config';

export default () => {
    return gulp.src([config.testDir + 'setup/node.js',  config.specDir + '**/*.js'], {
            read: false
        })
        .pipe(mocha({
            reporter: config.mocha.reporter,
            globals: config.mochaGlobals,
            ignoreLeaks: false
        }))
        .on('error', handleErrors);
};