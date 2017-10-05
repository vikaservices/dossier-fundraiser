var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//
// include here other files that need to copien to dist
//
gulp.task('copyVendorScripts', function() {
  var pathsToCopy = [
    './app/assets/scripts/vendor/**',
  ]
  return gulp.src(pathsToCopy)
      .pipe(gulp.dest("./app/temp/scripts/vendor"));
});


gulp.task('build', ['copyVendorScripts']);
