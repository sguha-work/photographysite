var gulp = require('gulp'); 
var watch = require('gulp-watch');

// include plug-ins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');

var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');


// JS concat and minify
gulp.task('MAIN_SITE_JAVASCRIPT_MINIFIER', function() {
  gulp.src(['./Frontend/MainSite/js/dev/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./Frontend/MainSite/js/'));
});

gulp.task('ADMIN_PANEL_JAVASCRIPT_MINIFIER', function() {
  gulp.src(['./Frontend/AdminPanel/js/dev/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./Frontend/AdminPanel/js/'));
});

gulp.task('MAIN_SITE_HTML_MINIFIER', function() {
  var htmlSrc = './Frontend/MainSite/html/dev/**/*.html',
      htmlDst = './Frontend/MainSite/html/prod';
 
  gulp.src(htmlSrc)
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

gulp.task('ADMIN_PANEL_HTML_MINIFIER', function() {
  var htmlSrc = './Frontend/AdminPanel/html/dev/**/*.html',
      htmlDst = './Frontend/AdminPanel/html/prod';
 
  gulp.src(htmlSrc)
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// CSS concat, auto-prefix and minify
gulp.task('MAIN_SITE_CSS_MINIFIER', function() {
  gulp.src(['./Frontend/MainSite/css/dev/**/*.css'])
    .pipe(concat('app.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./Frontend/MainSite/css/'));
});
gulp.task('ADMIN_PANEL_CSS_MINIFIER', function() {
  gulp.src(['./Frontend/AdminPanel/css/dev/**/*.css'])
    .pipe(concat('app.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./Frontend/AdminPanel/css/'));
});


// default gulp task
gulp.task('default', ['MAIN_SITE_JAVASCRIPT_MINIFIER', 'MAIN_SITE_HTML_MINIFIER', 'ADMIN_PANEL_JAVASCRIPT_MINIFIER','ADMIN_PANEL_HTML_MINIFIER', 'MAIN_SITE_CSS_MINIFIER', 'ADMIN_PANEL_CSS_MINIFIER'], function() {
   
  // watch for JS changes
  gulp.watch('Frontend/MainSite/js/dev/**/*.js', ['MAIN_SITE_JAVASCRIPT_MINIFIER']);
  gulp.watch('Frontend/AdminPanel/js/dev/**/*.js', ['ADMIN_PANEL_JAVASCRIPT_MINIFIER']);
  
  //watch the html changes
  gulp.watch('Frontend/MainSite/html/dev/**/*.html', ['MAIN_SITE_HTML_MINIFIER']);
  gulp.watch('Frontend/AdminPanel/html/dev/**/*.html', ['ADMIN_PANEL_HTML_MINIFIER']);

  // watch for CSS changes
  gulp.watch('Frontend/MainSite/css/dev/**/*.css', ['MAIN_SITE_CSS_MINIFIER']);
  gulp.watch('Frontend/AdminPanel/css/dev/**/*.css', ['ADMIN_PANEL_CSS_MINIFIER']);
  
});