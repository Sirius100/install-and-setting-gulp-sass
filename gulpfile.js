const gulp            = require('gulp');
const sass            = require('gulp-ruby-sass');
const concat          = require('gulp-concat');
const prefixer        = require('gulp-autoprefixer');



// //объединение файлов *.sass in style.sass
gulp.task('concat', function () {
   return gulp.src('../src/sass/css/*.css')
       .pipe(concat('style.css'))
       .pipe(gulp.dest('../css'))
});

gulp.task('watch', function () {
    gulp.watch('../src/sass/*.sass', ['sass']);
})


//команда запуска препроцессора sass
//создает сss файл из sass файла
gulp.task('sass', function () {
    sass('../src/sass/*.sass')
    .on('error', sass.logError)
        .pipe(gulp.dest('../src/sass/css/'))
            .pipe(concat('style.css'))
            .pipe(prefixer())
            .pipe(gulp.dest('../css'))
});

gulp.task('default',['watch']);
