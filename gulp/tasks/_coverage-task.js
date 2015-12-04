import gulp from 'gulp';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';
import _mocha from '../util/_mocha';

function test() {
    require('babel-core/register');
    return _mocha();
}

function coverageTask(done) {

    gulp.src(['src/**/*.js'])
        .pipe(istanbul({
            instrumenter: Instrumenter
        }))
        .pipe(istanbul.hookRequire())
        .on('finish', () => {
            return test()
                .pipe(istanbul.writeReports())
                .on('end', done);
        });
}

gulp.task('coverage', coverageTask);