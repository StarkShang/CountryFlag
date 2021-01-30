const gulp = require("gulp");
const svgSymbols = require("gulp-svg-symbols");

gulp.task("sprites", () => {
    return gulp
        .src("./node_modules/circle-flags/flags/**/*.svg")
        .pipe(svgSymbols())
        .pipe(gulp.dest("./src/assets/svg"));
});
