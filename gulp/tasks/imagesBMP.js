// MISC
const gulp    = require('gulp');
const config  = require('../../.gulprc.json');
const plumber = require('gulp-plumber');
const newer   = require('gulp-newer');

// IMAGES
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

module.exports = () => {
    return gulp.src(config.paths.bmpSrc)
        .pipe(plumber())
        .pipe(newer(config.paths.bmpDest))
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.paths.bmpDest));
};

