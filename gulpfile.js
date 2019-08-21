const gulp            = require('gulp');
const sass            = require('gulp-ruby-sass');
const concat          = require('gulp-concat');
const prefixer        = require('gulp-autoprefixer');
const pug             = require('gulp-pug');
const plumber         = require('gulp-plumber');
const sourcemaps      = require('gulp-sourcemaps');


//объединение файлов *.sass in style.sass
gulp.task('concat',  () => {
   return gulp.src('../sass/css/*.css')
       .pipe(concat('style.css'))
       .pipe(gulp.dest('../css'))
});

gulp.task('watch', () => {
    gulp.watch('../sass/*.sass', ['sass']);
    gulp.watch('../pug/*.pug', ['pug']);
    gulp.watch('../pug/template/*.pug', ['pug']);
    gulp.watch('../pug/template/section/*.pug', ['pug']);
});

//запуск шаблонизатора pug
gulp.task('pug', () =>  {
   return gulp.src('../pug/*.pug')
  .pipe(plumber())
  .pipe(pug({
    // Your options in here.
      pretty : true
  }))
  .pipe(gulp.dest('../html/'))
  .pipe(plumber.stop())  
});


//команда запуска препроцессора sass
//создает сss файл из sass файла
gulp.task('sass',  () => {
    sass('../sass/*.sass')
    .on('error', sass.logError)
        .pipe(gulp.dest('../sass/css/'))
        .pipe(sourcemaps.init())
            .pipe(concat('style.css'))
            .pipe(prefixer())
            .pipe(sourcemaps.write('../maps'))
            .pipe(gulp.dest('../css'))
});

gulp.task('default',['watch']);
