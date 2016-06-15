// MISC
const gulp    = require('gulp');
const config  = require('../../.gulprc.json');
const plumber = require('gulp-plumber');

// TEST
const mocha   = require('gulp-mocha');

module.exports = () => {
    return gulp.src(config.paths.jsTest)
        .pipe(plumber())
        .pipe(mocha());
};
