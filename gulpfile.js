const gulp = require('gulp');

gulp.task('default', () => {
    const postcss = require('gulp-postcss');

    return gulp.src('src/styles/**/*.css')
        .pipe(postcss([require('precss'), require('autoprefixer')]))
        .pipe(gulp.dest('public/styles/'));
});

gulp.task('favicon', () => {
    return gulp.src('src/favicon/**/*.**')
        .pipe(gulp.dest('public/favicon'));
});

gulp.task('watchStyles', () => {
    gulp.watch('src/styles/**/*.css', gulp.series('default'));
});
