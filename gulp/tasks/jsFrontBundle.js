// MISC
const gulp       = require('gulp');
const config     = require('../../.gulprc.json');
const buffer     = require('vinyl-buffer');
const source     = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');

// JS
const uglify     = require('gulp-uglify');
const browserify = require('browserify');

// BABEL
const babelify = require('babelify');

module.exports = () => {
    const bundler = browserify({
        entries: config.paths.jsSrc
    });

    return bundler
        .transform(babelify, { presets: ['es2015', 'react'] })
        .bundle()
        .on('error', function(err){
            console.log(err.stack);
            console.log(`Compiler Error:  ${err.message}`);
        })
        .pipe(source('app.bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        // .pipe(uglify())
        .pipe(gulp.dest(config.paths.jsDest));
};
