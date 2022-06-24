const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudancas', () => {
    watch('src/**/*.html', () => gulp.start('app.html')) // Vai monitorar e dizer qual task será disparada quando o arquivo modificar. 
    watch('src/**/*.scss', () => gulp.start('app.scss'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'))
})

gulp.task('servidorInit', () => {
})

gulp.task('servidor', gulp.parallel('monitorarMudancas', 'servidorInit'), () => {
    return gulp.src('build').pipe(webserver({
        livereload: true,
        port: 8080,
        open: true // Vai abrir o Browser
    }))
})