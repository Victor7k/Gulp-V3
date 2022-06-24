// Babel pega um código mais novo e o converte para um mais antigo, q é suportado por todos os Browsers.
const gulp = require('gulp')
const concat = require('gulp-concat')
// const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            // minified Faz a mesma compactação q o uglify.
            minified: true,
            comments: false,
            presets: ["env"] // O 'env' vai pegar os presets q vc vai precisar pra sua aplicação.
        }))
        // .pipe(uglify())
        .on('error', function (err) { console.log(err) })
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})