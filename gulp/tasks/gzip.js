import config from '../config';
import gulp   from 'gulp';
import gzip   from 'gulp-gzip';

gulp.task('gzip', ['dev', 'prod'], () => {

  return gulp.src(config.gzip.src)
    .pipe(gzip(config.gzip.options))
    .pipe(gulp.dest(config.gzip.dest));
});