import gulp from 'gulp';
import mocha from 'gulp-mocha';

function _mocha() {
    return gulp.src(['test/setup/node.js', 'test/unit/**/*.js'], {
            read: false
        })
        .pipe(mocha({
            reporter: 'spec',
            globals: [
                'stub',
                'spy',
                'expect'
            ],
            ignoreLeaks: false
        }));
}

export default _mocha;