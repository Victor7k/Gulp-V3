const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('gulp4-run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if(util.env.production) {
        sequence(['deps', 'app'])
        // gulp.start('deps', 'app') vai fazer o mesmo q 'sequence'.
    } else {
        sequence(['deps', 'app', 'servidor'])
        // gulp.start('deps', 'app', 'servidor')
    }
})