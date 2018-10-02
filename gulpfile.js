const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const minify = require('gulp-minify');


gulp.task('less', () => {
  var normal = gulp
    .src('./src/less/**/_main.less') // Get main file
    .pipe(concat('nitpum-navbar.css')) // Combine into single file
    .pipe(less())
    .pipe(gulp.dest('./dist/css/'))

  var minify = gulp
    .src('./src/less/**/_main.less') // Get main file
    .pipe(concat('nitpum-navbar.min.css')) // Combine into single file
    .pipe(less({
      compress : true // Simply minify code
    }))
    .pipe(gulp.dest('./dist/css/'))
  return [normal, minify];
});

gulp.task('js', function () {
  gulp.src('./src/js/**/_main.js')
    .pipe(concat('nitpum-navbar.js'))
    .pipe(minify({
        ext: {
          src: '.js',
          min: '.min.js',
        },
        /*
        output: {
          preserveComments: 'some'
        } */
    }))
    .pipe(gulp.dest('./dist/js/'));
})
gulp.task('compile', ['less']);

// Watch and auto compile
gulp.task('autocompile', function () {
  gulp.watch('./src/less/**/*.less', ['less']);
  gulp.watch('./src/js/**/*.js', ['js']);
});

// 
// Automation
//  
function getPackageJsonVersion() {
  // We parse the json file instead of using require because require caches
  // multiple calls so the version number won't be updated
  return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
};

gulp.task('bump-version', function () {
  return gulp.src(['./package.json'])
    .pipe(bump({ type: 'minor' }))
    .pipe(gulp.dest('./'))
});
