// MISC
const gulp       = require('gulp');
const config     = require('../../.gulprc.json');
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');

// CSS
const postcss = require('gulp-postcss');
const cssimport = require('postcss-import');
const url = require('postcss-url');
const cssnext = require('postcss-cssnext');
const assets = require('postcss-assets');
const stylelint = require('stylelint');
const cssnano = require('cssnano');
const reporter = require('postcss-reporter');

module.exports = () => {
    const processors = [
        cssimport(),
        url(),
        cssnext({
            browsers: ['> 5%', 'last 2 versions', 'ie > 10']
        }),
        assets({ loadPaths: [config.paths.bmpDest, config.paths.svgDest] }),
        stylelint(),
        // cssnano(),
        reporter({ clearMessages: true })
    ];
    return gulp.src(config.paths.cssSrc)
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.cssDest))
        .pipe(livereload());
};

