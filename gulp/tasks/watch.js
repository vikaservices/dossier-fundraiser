var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch-files', function(){

  browserSync.init({
    notify: false,
    server: {
      baseDir: '.'
    }
  });

  watch('./*.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('injectCss');
  });

  watch('./app/assets/styles/**/*.scss', function(){
    gulp.start('injectScss');
  });

  watch('./app/assets/scripts/**/*.js', function(){
    gulp.start('scriptsRefresh');
  });

});

gulp.task('injectCss', ['styles'], function(){
  return gulp.src(['./app/temp/styles/style.css','./app/temp/styles/spenden.css'])
    .pipe(browserSync.stream());
});

gulp.task('injectScss', ['styles_scss'], function(){
  return gulp.src('./app/temp/styles/spenden.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
  browserSync.reload();
});
