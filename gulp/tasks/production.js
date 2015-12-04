import gulp from 'gulp';
import path from 'path';
import filter from 'gulp-filter';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import config from '../config';

function prodTask(cb) {
    
	process.env.NODE_ENV = 'production';

    return gulp.src(config.sourceDir + config.outputName)
        .pipe(plumber())

    .pipe(webpackStream({
            cache: false,
            debug: false,
            devtool: false,
            hot: false,
            build: true,
            output: {
                filename: 'gulps.min.js',
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
            plugins: [
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.NoErrorsPlugin()
            ]
        }))
        .pipe(rename(path.basename(config.sourceDir + config.outputName, path.extname(config.sourceDir + config.outputName)) + '.min.js'))
        .pipe(uglify({
            output: {
                comments: false
            },
            compress: {
                'unused': true,
                'dead_code': true,
                warnings: false,
                screw_ie8: true
            }
        }))
        .pipe(gulp.dest(config.sourceDir + config.minified));
}

gulp.task('prod', prodTask);