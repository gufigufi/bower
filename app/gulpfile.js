var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('mainCSS', function() {
    return gulp.src(mainBowerFiles('**/*.css', {
      "overrides": {
        "bootstrap": {
            "main": [
                "./dist/css/bootstrap.min.css",
                "./dist/css/bootstrap-theme.min.css"
                ]
        }
    }}))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('mainJS', function() {
    return gulp.src(mainBowerFiles('**/*.js')
    .pipe(gulp.dest('dist/js'))
});