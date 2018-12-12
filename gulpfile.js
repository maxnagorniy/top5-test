var gulp = require('gulp');
var minCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');


gulp.task('serve', ['minify', 'gulp-uglify', 'sass', 'images'], function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch('src/images/**/*', function() {
        gulp.run('images');
    });
    gulp.watch('src/*.html', ['minify']);
    gulp.watch('src/js/*.js', ['gulp-uglify']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minCSS())
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
});

gulp.task('minify', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'));
});

gulp.task('gulp-uglify', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
});

gulp.task('default', ['serve']);