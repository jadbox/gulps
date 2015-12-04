import gulp from 'gulp';
import path from 'path';
import plumber from 'gulp-plumber';
import livereload from 'gulp-livereload';
import { Instrumenter } from 'isparta';
import glob from 'glob';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import config from '../config';

gulp.task('browser', () => {

    const testFiles = glob.sync(config.specDir + '**/*.js');
    const allFiles = [config.testDir + 'setup/browser.js'].concat(testFiles);

    let firstRun = true;

    return gulp.src('')
        .pipe(plumber())
        .pipe(webpackStream({
            watch: true,
            entry: allFiles,
            output: {
                filename: '_jacker.js'
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.json$/,
                        exclude: /node_modules/,
                        loader: 'json-loader'
                    }
                ]
            },
            plugins: [
                new webpack.optimize.LimitChunkCountPlugin({
                    maxChunks: 1
                })
            ],
            devtool: 'inline-source-map'
        }, null, function() {
            if (firstRun) {
                livereload.listen({
                    port: 35729,
                    host: 'localhost',
                    start: true
                });
                const watcher = gulp.watch(['src/**/*', 'test/**/*'], ['lint']);
            } else {
                livereload.reload('./tmp/_jacker.js');
            }
            firstRun = false;
        }))
        .pipe(gulp.dest('./tmp'));
});