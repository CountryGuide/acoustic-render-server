const gulp = require('gulp');

gulp.task('default', () => {
    const postcss = require('gulp-postcss');

    return gulp.src('src/styles/**/*.css')
        .pipe(postcss([require('precss'), require('autoprefixer')]))
        .pipe(gulp.dest('public/styles/'));
});

gulp.task('watchStyles', () => {
    gulp.watch('src/styles/**/*.css', gulp.series('default'));
});
