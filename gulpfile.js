const gulp = require("gulp"),
	browserSync = require("browser-sync"),
	autoPrefixer = require("gulp-autoprefixer"),
	sass = require("gulp-sass")(require("sass")),
	cleanCss = require("gulp-clean-css")

gulp.task("server", function () {
	browserSync.init({
		server: {
			baseDir: "./src",
		},
	})
})

gulp.task("styles", function () {
	return gulp
		.src("./src/scss/**/*.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(autoPrefixer())
		.pipe(cleanCss({ compatibility: "ie8" }))
		.pipe(gulp.dest("./src/css"))
		.pipe(browserSync.stream())
})

gulp.task("watch", function () {
	gulp.watch("./src/scss/**/*.scss").on("change", gulp.parallel("styles"))
	gulp.watch("./src/*.html").on("change", browserSync.reload)
	gulp.watch("./src/js/**/*.js").on("change", browserSync.reload)
})

gulp.task("default", gulp.parallel("watch", "server", "styles"))
