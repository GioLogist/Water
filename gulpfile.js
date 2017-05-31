// Include gulp
var gulp = require('gulp');

// Run commands
var exec = require('child_process').exec;

// Automatically load gulp plugins from package.json
var  plugins = require('gulp-load-plugins')({
        pattern: '*', // by default, it only loads plugins prefixed "gulp-"
        rename: {'jshint': 'default-jshint'}, // a mapping of plugins to rename
});

// Detect JS Errors
gulp.task('lint', function() {
    return gulp.src(['./src/**/*.js','!./src/styleguide/**/*.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('./src/**/*.scss')
        .pipe(plugins.sass())
        .pipe(plugins.concat('all.min.css'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(plugins.browserSync.stream());
});

// Minify JS
gulp.task('scripts', function() {
    return gulp.src(['./src/**/*.js','!./src/styleguide/**/*.js'])
        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/'))
        .pipe(plugins.browserSync.stream());
});

// Watch Files For Changes
gulp.task('watch', function() {
    // Static gulp server
    plugins.browserSync.init({
        server: "./dist"
    });
    gulp.watch('./src/**/*.js', ['lint', 'scripts']);
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.twig', ['twig']);
});

// Compile Twig Templates
gulp.task('twig', function () {
    return gulp.src('./src/pages/**/*.twig')
        .pipe(plugins.twigUpToDate())
        .pipe(gulp.dest('./dist/'))
        .pipe(plugins.browserSync.stream());
});

// Copy homepage over (pardon the hack)
gulp.task('copy-home',['twig'], function () {
    return gulp.src('./dist/index/index.html')
      .pipe(gulp.dest('./dist/'))
      .pipe(plugins.browserSync.stream());
});

// Styleguide Builer
gulp.task('styleguide-build', function(cb) {
  // Use CLI version, to avoid gulp-kss dependency
  var kss = 'node ' + __dirname + '/node_modules/kss/bin/kss ';
  // Execute kss command
  exec(kss + 'src/ dist/styleguide/ --mask *.scss --css ../assets/css/all.min.css --markup true -b src/styleguide/custom-builder/ --placeholder class_name --title Water', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
    // reload after running command
    plugins.browserSync.reload();
  });
});

// Styleguide Watcher
gulp.task('styleguide-watch', function() {
    // Static gulp server
    plugins.browserSync.init({
        server: "./dist"
    });
    gulp.watch('./src/**/*', ['styleguide-build']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch','twig','copy-home']);

// Styleguide
gulp.task('styleguide', ['styleguide-build', 'styleguide-watch']);
