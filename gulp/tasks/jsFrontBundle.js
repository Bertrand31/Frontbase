// MISC
const gulp       = require('gulp');
const config     = require('../../.gulprc.json');
const isDev      = config.env === 'dev';
const sourcemaps = require('gulp-sourcemaps');

// JS
const uglify     = require('gulp-uglify');
const browserify = require('browserify');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');

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
            console.log('Compiler Error: ' + err.message);
        })
        .pipe(source('app.bundle.js'))
        .pipe(buffer())
        .pipe(isDev ? sourcemaps.init({ loadMaps: true }) : uglify())
        .pipe(gulp.dest(config.paths.jsDest));
};
