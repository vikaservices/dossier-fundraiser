var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var browserSync = require('browser-sync').create();
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');
var reference = require('postcss-reference');
var sass = require('gulp-sass');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    // .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer, reference]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('styles_scss', function(){
  return gulp.src('./app/assets/styles/**.scss')
    .pipe(sass())
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
