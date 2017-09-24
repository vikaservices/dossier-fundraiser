var gulp = require('gulp');
var postcss = require('gulp-postcss');
//var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var browserSync = require('browser-sync').create();
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');
var reference = require('postcss-reference');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/style.css')
    // .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, reference]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
