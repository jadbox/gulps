import gulp from 'gulp';
import path from 'path';
import filter from 'gulp-filter';
import plumber from 'gulp-plumber';
import webpackStream from 'webpack-stream';

function devTask(cb) {
    
	process.env.NODE_ENV = 'development';
	 
 return gulp.src(path.join('src/gulps.js'))
        .pipe(plumber())
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
            devtool: 'source-map'
        }))
        .pipe(gulp.dest(path.dirname('dist/gulps.js')))
        .pipe(filter(['*', '!**/*.js.map']))


}

gulp.task('dev', devTask);