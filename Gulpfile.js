const config     = require('./.gulprc.json');
const livereload = require('gulp-livereload');

const gulp = require('./gulp')([
    'css',
    'imagesBMP',
    'imagesSVG',
]);

gulp.task('default', () => {
    livereload.listen();
    gulp.watch(config.paths.cssAll, ['css']);
    gulp.watch(config.paths.bmpSrc, ['imagesBMP']);
    gulp.watch(config.paths.svgSrc, ['imagesSVG']);
});
