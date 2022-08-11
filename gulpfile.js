const gulp = require("gulp"),
	browserSync = require("browser-sync"),
	autoPrefixer = require("gulp-autoprefixer"),
	sass = require("gulp-sass")(require("sass")),
	cleanCss = require("gulp-clean-css"),
	imagemin = require("gulp-imagemin"),
	htmlmin = require("gulp-htmlmin")

gulp.task("server", function () {
	browserSync.init({
		server: {
			baseDir: "dist",
		},
	})

	gulp.watch("src/*.html").on("change", browserSync.reload)
})

gulp.task("styles", function () {
	return gulp
		.src("./src/scss/**/*.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(autoPrefixer())
		.pipe(cleanCss({ compatibility: "ie8" }))
		.pipe(gulp.dest("dist/css"))
		.pipe(browserSync.stream())
})

gulp.task("watch", function () {
	gulp.watch("src/scss/**/*.{scss,sass,css}", gulp.parallel("styles"))
	gulp.watch("src/*.html", gulp.parallel("html"))
	gulp.watch("src/js/**/*.js").on("change", browserSync.reload)
})

gulp.task("html", function () {
	return gulp
		.src("src/*.html")
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest("dist/"))
})

gulp.task("scripts", function () {
	return gulp.src("src/js/**/*.js").pipe(gulp.dest("dist/js"))
})

gulp.task("fonts", function () {
	return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"))
})

gulp.task("icons", function () {
	return gulp.src("src/img/**/*.{svg,ico}").pipe(gulp.dest("dist/img"))
})

gulp.task("img", function () {
	return gulp.src("src/img/**/*.{jpg,png}").pipe(imagemin()).pipe(gulp.dest("dist/img"))
})

gulp.task("mailer", function () {
	return gulp.src("src/mailer/**/*").pipe(gulp.dest("dist/mailer"))
})

gulp.task(
	"default",
	gulp.parallel("watch", "server", "styles", "scripts", "fonts", "img", "mailer", "html", "icons")
)
