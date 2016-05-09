var
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  nodemon = require('gulp-nodemon'),
  inject = require('gulp-inject')

  gulp.task('browser-sync', ['nodemon'], function(){
  	browserSync.init(null, {
  		proxy: 'http://localhost:3000',
  		files: ['app/public/**/*.*'],
  		port: 7000
  	})
  })

  gulp.task('nodemon', function(){
    nodemon({
      ext: 'js html css',
      env: {'NODE_ENV': 'development'}
    })
  })

  gulp.task('index', function () {
  var target = gulp.src('./public/index.html');
  var sources = gulp.src(['./public/js/**/*.js', './css/**/*.css'], {read: false}, { cwd: 'public' });

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./public'));
  });

  gulp.task('default', ['browser-sync'])
