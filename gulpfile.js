var gulp = require('gulp'); 
// include plug-ins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
 
// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./Frontend/MainSite/js/dev/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./Frontend/MainSite/js/'));
});

// default gulp task
gulp.task('default', ['scripts'], function() {
});

// default gulp task
gulp.task('default', ['scripts'], function() {
   
  // watch for JS changes
  gulp.watch('./Frontend/MainSite/js/dev/**/*.js', function() {
    gulp.run('scripts');
  });
 
  
});