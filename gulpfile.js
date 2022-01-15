var 
gulp = require('gulp'),
sass = require('gulp-sass');
// source and distribution folder

var
source = 'assets/',
dest = 'dist/';

// css source file: .scss files

var scss = {
	in: source + 'styles/main.scss',
	out: dest + 'css/',
	watch: source + 'styles/**/*',
	sassOpts: {
	outputStyle: 'nested',
	precison: 3,
	errLogToConsole: true,
	}
};

// compile scss

gulp.task('sass', function () {
	return gulp.src(scss.in)
	.pipe(sass(scss.sassOpts))
	.pipe(gulp.dest(scss.out));
});
// default task

gulp.task('default', ['sass'], function () {
	gulp.watch(scss.watch, ['sass']);
});
