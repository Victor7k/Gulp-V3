const gulp = require('gulp')

// O Primeiro parametro é o nome da Task.
    // default é a porta de entrada do Gulp.
gulp.task('default', () => {
    //console.log('OK!')
    gulp.start('copiar', 'fim') // 'start' Chama as tasks q vc quer executar.

})

// As 'Tasks' q estão dentro do Array precisam ser executadas antes da Task principal como pré requisitos para q ela possa funcionar.
gulp.task('copiar', ['antes1', 'antes2'], () => {
    console.log('Copiar!!!')
    // 'gulp.src()' define quais são os arquivos, Arrays de arquivos ou expressões q vc deseja trabalhar.
    gulp.src(['pastaA/**/*.txt']) // Vai copiar todos os arquivos e subpastas q estão dentro de uma determinada pasta.
        /* 
        Geralmente vc seleciona os arquivos com quer trabalhar, os transforma e depois joga os arquivos transformados numa determinada pasta. 
        .pipe() vai encadear uma chamada a outra.
            .pipe(transformacao1()) 
            .pipe(transformacao2()) 
        */
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes 1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes 2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim 1!!!')
})

gulp.task('fim2', () => {
    console.log('Fim 2!!!')
})