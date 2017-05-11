// Include gulp
var gulp = require('gulp');

// Automatically load gulp plugins from package.json
var plugins = require('gulp-load-plugins')();

// Detect JS Errors
gulp.task('lint', function() {
    return gulp.src('./src/**/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('./src/**/*.scss')
        .pipe(plugins.sass())
        .pipe(gulp.dest('dist/'));
});

// Minify JS
gulp.task('scripts', function() {
    return gulp.src('./src/**/*.js')
        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['lint', 'scripts']);
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.twig', ['twig']);
});

// Compile Twig Templates
gulp.task('twig', function () {
    return gulp.src('./src/templates/index.twig')
        .pipe(plugins.twigUpToDate())
        .pipe(gulp.dest('./dist/'));
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch','twig']);
