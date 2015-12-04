/**
 * Handle errors nicely
 *
 * Emit sound and notification
 */
import notify from 'gulp-notify';
import gutil from 'gulp-util';

export default function(error) {

    // Make a beep in the speaker
    gutil.beep();

    if (!global.isProd) {

        var args = Array.prototype.slice.call(arguments);

        // Send error to notification center with gulp-notify
        notify.onError({
            title: 'Compile Error',
            message: '<%= error.message %>'
        }).apply(this, args);

        // Keep gulp from hanging on this task
        this.emit('end');

    } else {
        // Log the error and stop the process
        // to prevent broken code from building
        console.log(error);
        process.exit(1);
    }

};