import gulp from 'gulp';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';
import _mocha from '../util/_mocha';
import handleErrors from '../util/handleErrors';
import config from '../config';

function test() {
    require('babel-core/register');
    return _mocha(); // 'mocha' is shared between 'coverage' and 'test'
}

gulp.task('coverage', (done) => {

    gulp.src([config.sourceDir + '**/*.js'])
    .pipe(istanbul({
        instrumenter: Instrumenter
    }))
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
        return test()
            .pipe(istanbul.writeReports())
            .on('end', done);
    })
	.on('error', handleErrors);
});