var { watch, src, dest, parallel, series } = require('gulp');
var twig = require('gulp-twig');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var imagemin = require('gulp-imagemin');
var babel = require('gulp-babel');
var webpack = require('webpack-stream');

// Девсервер
function devServer(cb) {
    var params = {
        watch: true,
        reloadDebounce: 150,
        notify: false,
        server: { baseDir: './build' },
    };

    browserSync.create().init(params);
    cb();
}

function buildPages() {
    return src('build/pages/*.html')
        .pipe(twig())
        .pipe(dest('build/pages/'));
}

function buildStyles() {
    return src('build/style/*.css')
        .pipe(sass())
        .pipe(postcss([
            autoprefixer(),
            cssnano()
        ]))
        .pipe(dest('build/style/'));
}

function buildScripts() {
    return src('build/js/index.js')
        .pipe(webpack({output: {filename: 'bundle.js'}}))
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(dest('build/js/'));
}

function watchFiles() {
    watch('pages/*.html', buildPages);
    watch('style/*.scss', buildStyles);
    watch('js/**/*.js', buildScripts);
}

// Соберём и начнём следить
exports.default =
    parallel(
        devServer,
        series(
            parallel(buildPages, buildStyles, buildScripts ),
            watchFiles
        )
    );