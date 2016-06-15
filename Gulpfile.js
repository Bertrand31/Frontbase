const config     = require('./.gulprc.json');
const livereload = require('gulp-livereload');

const gulp = require('./gulp')([
    'css',
    'jsFrontTest',
    'imagesBitmap',
    'imagesSVG',
]);

gulp.task('default', () => {
    livereload.listen();
    gulp.watch(config.paths.cssAll, ['css']);
    gulp.watch(config.paths.jsAll, ['jsFrontTest']);
    gulp.watch(config.paths.bmpSrc, ['imagesBitmap']);
    gulp.watch(config.paths.svgSrc, ['imagesSVG']);
});
