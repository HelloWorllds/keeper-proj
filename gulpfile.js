var gulp = require("gulp");
var server = require("gulp-server-livereload");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var useref = require("gulp-useref");
var gulpif = require("gulp-if");
var uglify = require("gulp-uglify");
var csso = require("gulp-csso");
var imagemin = require('gulp-imagemin');

//server

gulp.task("start", function() {
	gulp.src("app").pipe(server({
		livereload: true,
		open: true
	}));
});

//styles

gulp.task("style", function() {
	return gulp.src("app/sass/**/*.sass")
	.pipe(sass().on("error", sass.logError))
	.pipe(autoprefixer({
		browsers: ['>0%', 'ie 8', 'ie 9']
	}))
	.pipe(gulp.dest("app/css"));
});

//build

gulp.task("build", function() {
	return gulp.src("app/*.html")
	.pipe(useref())
	.pipe(gulpif("*.js", uglify()))
	.pipe(gulpif("*.css", csso()))
	.pipe(gulp.dest("public"));
});

//images
gulp.task("image", function() {
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/images'))
});

gulp.task("watch", function() {
	gulp.watch("app/sass/**/*.sass", ["style"]);
});

gulp.task("default", ["start", "watch"]);