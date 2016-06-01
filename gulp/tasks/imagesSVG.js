// MISC
const gulp    = require('gulp');
const config  = require('../../.gulprc.json');
const plumber = require('gulp-plumber');

// SVG SPRITE
const svgSprite = require('gulp-svg-sprite');

module.exports = () => {
    return gulp.src(config.paths.svgSrc)
        .pipe(plumber())
        .pipe(svgSprite({
            shape: {
                transform: ['svgo']
            },
            mode: {
                symbol: {
                    inline: true,
                    example: false,
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(gulp.dest(config.paths.svgDest));
};
