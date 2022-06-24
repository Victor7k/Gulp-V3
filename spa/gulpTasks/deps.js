const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

//gulp.task('deps', ['deps.css', 'deps.fonts'])

gulp.task('deps', gulp.parallel('deps.css', 'deps.fonts'))

gulp.task('deps.css', () => {
    return gulp.src([ // O run-sequence só vai funcionar quando todos os metodos estiverem retornando.
        'node_modules/font-awesome/css/font-awesome.css'
    ])
        .pipe(uglifycss({ "uglyComments": false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('deps.fonts', () => {
    return gulp.src(['node_modules/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('build/assets/fonts'))
})