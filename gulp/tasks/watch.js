/**
 * Watch task
 *
 * Watch all changes in source folder and launch task accordingly
 */
import config from '../config';
import gulp from 'gulp';

// Scripts are automatically watched and rebundled by Watchify inside Browserify task
gulp.task('watch', function() {
    gulp.watch([config.sourceDir + '**/*', config.testDir + '**/*', 'package.json', '**/.eslintrc'], ['lint', 'test']);
});