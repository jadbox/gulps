import webpack from 'webpack';
import gulp from 'gulp';
import path from 'path';
import filter from 'gulp-filter';
import plumber from 'gulp-plumber';
import webpackStream from 'webpack-stream';
import WebpackNotifierPlugin from 'webpack-notifier';
import handleErrors from '../util/handleErrors';
import header from '../header';
import config from '../config';

gulp.task('dev', ['test', 'lint:source'], () => {

    process.env.NODE_ENV = 'development';

    return gulp.src(config.sourceDir + config.outputName)
        .pipe(plumber())
        .on('error', handleErrors)
        .pipe(webpackStream({
            output: {
                filename: config.outputName,
                libraryTarget: 'umd',
                library: config.libraryName
            },
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }]
            },
            plugins: [new webpack.BannerPlugin(header), new WebpackNotifierPlugin({
                title: config.notifyTitle,
                alwaysNotify: true
            })],
            devtool: 'source-map'
        }))
        .pipe(gulp.dest(path.dirname(config.distDir + config.outputName)))
        .pipe(filter(['*', '!**/*.js.map']))
});