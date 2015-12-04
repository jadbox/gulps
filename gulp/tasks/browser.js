import gulp from 'gulp';
import path from 'path';
import mocha from 'gulp-mocha';
import plumber from 'gulp-plumber';
import istanbul from 'gulp-istanbul';
import livereload from 'gulp-livereload';
import { Instrumenter } from 'isparta';
import glob from 'glob';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

const watchFiles = ['src/**/*', 'test/**/*'];


function browserTask(done) {

 // Our testing bundle is made up of our unit tests, which
    // should individually load up pieces of our application.
    // We also include the browser setup file.
    const testFiles = glob.sync(__dirname + '../../../test/unit/**/*.js');
    const allFiles = [__dirname + '../../../test/setup/browser.js'].concat(testFiles);

    // Lets us differentiate between the first build and subsequent builds
    var firstBuild = true;

    // This empty stream might seem like a hack, but we need to specify all of our files through
    // the `entry` option of webpack. Otherwise, it ignores whatever file(s) are placed in here.
    return gulp.src('')
        .pipe(plumber())
        .pipe(webpackStream({
            watch: true,
            entry: allFiles,
            output: {
                filename: '__spec-build.js'
            },
            module: {
                loaders: [
                    // This is what allows us to author in future JavaScript
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                    // This allows the test setup scripts to load `package.json`
                    {
                        test: /\.json$/,
                        exclude: /node_modules/,
                        loader: 'json-loader'
                    }
                ]
            },
            plugins: [
                // By default, webpack does `n=>n` compilation with entry files. This concatenates
                // them into a single chunk.
                new webpack.optimize.LimitChunkCountPlugin({
                    maxChunks: 1
                })
            ],
            devtool: 'inline-source-map'
        }, null, function() {
            if (firstBuild) {
                livereload.listen({
                    port: 35729,
                    host: 'localhost',
                    start: true
                });
                var watcher = gulp.watch(['src/**/*', 'test/**/*'], ['lint']);
            } else {
                livereload.reload('./tmp/__spec-build.js');
            }
            firstBuild = false;
        }))
        .pipe(gulp.dest('./tmp'));
}

gulp.task('browser', browserTask);