const config     = require('./.gulprc.json');
const isDev      = config.env === 'dev';
const livereload = require('gulp-livereload');

const gulp = require('./gulp')([
    'css',
    'jsFrontBundle',
    'jsFrontLint',
    'imagesBitmap',
    'imagesSVG',
]);

gulp.task('default', () => {
    isDev && livereload.listen();
    gulp.watch(config.paths.cssAll, ['css']);
    gulp.watch(config.paths.jsSrc, ['jsFrontLint', 'jsFrontBundle']);
    gulp.watch(config.paths.bmpSrc, ['imagesBitmap']);
    gulp.watch(config.paths.svgSrc, ['imagesSVG']);
});
