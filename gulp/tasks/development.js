import webpack from 'webpack';
import gulp from 'gulp';
import path from 'path';
import filter from 'gulp-filter';
import plumber from 'gulp-plumber';
import webpackStream from 'webpack-stream';
import WebpackNotifierPlugin from 'webpack-notifier';
import handleErrors from '../util/handleErrors';
import header from '../header';

function devTask(cb) {

    process.env.NODE_ENV = 'development';

    return gulp.src(path.join('src/gulps.js'))
        .pipe(plumber())
        .on('error', handleErrors)
        .pipe(webpackStream({
            output: {
                filename: 'gulps.js',
                libraryTarget: 'umd',
                library: 'gulps'
            },
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }]
            },
            plugins: [new webpack.BannerPlugin(header), new WebpackNotifierPlugin({
                title: 'Gulps',
                alwaysNotify: true
            })],
            devtool: 'source-map'
        }))
        .pipe(gulp.dest(path.dirname('dist/gulps.js')))
        .pipe(filter(['*', '!**/*.js.map']))
}

gulp.task('dev', devTask);