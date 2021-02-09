const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

function transpileJS() {}

function copyImgs() {
  return src("./resources/img/**/*").pipe(dest("./dist/img/"));
}

function copyCss() {
  return src("./resources/css/**/*").pipe(dest("./dist/css/"));
}

function copyHtml() {
  console.log("html");
  return src("./pages/**/*.html").pipe(dest("./dist/"));
}

function css() {
  return src("./resources/sass/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/css"))
    .pipe(browserSync.stream());
}

function bSync(done) {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
    open: false,
  });
}

function reload(done) {
  browserSync.reload();
  done();
}

function cleanCSS(done) {
  require("child_process").execSync("rm -rf ./dist/css");
  done();
}

exports.build = function () {
  console.log("production");
};

exports.default = function () {
  bSync();
  watch("resources/sass/*.scss", series(cleanCSS, css, copyCss));
  watch("pages/*.html", series(copyHtml, copyImgs, reload));
};
