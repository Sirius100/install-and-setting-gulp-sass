const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () =>
    sass('source/file.scss', {sourcemap: true})
        .on('error', sass.logError)
        // for inline sourcemaps
        .pipe(sourcemaps.write())
        // for file sourcemaps
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest('./css'))
);

gulp.task('hello', function (){
    console.log('привет!!!');
});

// gulp.task('sass', function () {
//     gulp-ruby-sass('/poligon/**/*.sass')
//         .pipe(sass())
//         .pipe(gulp.dest('.poligon/'));
// });
