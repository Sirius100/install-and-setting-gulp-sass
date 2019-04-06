const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const prefixer = require('gulp-autoprefixer');



//команда запуска препроцессора sass
//создает сss файл из sass файла
gulp.task('sass', () =>
  sass('**/sass/*.sass')
  .on('error', sass.logError)
);

//вывод в консоль предупреждения об изменении файла sass
gulp.task('startnote', () =>
  console.log('***!!! <СТАРТ трансформации> !!!***')
);

gulp.task('endnote', () =>
  console.log('***!!! <КОНЕЦ трансформации> !!!***')
);

//объединение файлов *.css in style.css
gulp.task('concat', () =>
  gulp.src('./src/sass/*.css')
    .pipe(prefixer()) //вызов плагина расстановки префиксов
    .pipe(concat('style.css'))
    .pipe(gulp.dest('src/css'))
);

gulp.task('watch', () =>
  gulp.watch('src/sass/*.sass', ['sass', 'concat'])
);


// var watcher = gulp.watch('src/sass/*.sass', ['endnote']);

gulp.task('default', ['startnote', 'watch', 'sass', 'concat', 'endnote']);
