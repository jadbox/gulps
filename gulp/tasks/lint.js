import gulp from 'gulp';
import plumber from 'gulp-plumber';
import eslint from 'gulp-eslint';
import util from 'gulp-util';
import config from '../config';

// Lint a set of files
function lint(files) {
    return gulp.src(files)
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError())
        .on('error', function onError() {
            util.beep();
        })
}

function lintSrc() {
    return lint(config.sourceDir + '**/*.js');
}

function lintTest() {
    return lint(config.specDir + '/**/*.js');
}

function lintGulpfile() {
    return lint('gulpfile.babel.js');
}

// Lint our source code
gulp.task('lint:source', lintSrc);

// Lint our test code
gulp.task('lint:test', lintTest);

// Lint everything
gulp.task('lint', ['lint:source', 'lint:test']);