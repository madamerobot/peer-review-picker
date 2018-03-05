const gulp = require('gulp')
const babel = require('gulp-babel')
const browserify = require('browserify')
const watchify = require('watchify')
const nodemon = require('nodemon')
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream')
const uglify = require('gulp-uglify')
const gulpUtil = require('gulp-util')

gulp.task('watchJs', () => {
    var b = watchify(browserify('app.js', watchify.args))
        .transform('babelify', {
            presets: ['es2015'],
            ignore: /\/node_modules\/(?!app\/)/
        })

    b.on('update', rebundle)
    b.on('log', gulpUtil.log.bind(gulpUtil))

    function rebundle() {
        return b.bundle()
            .on('error', gulpUtil.log)
            .pipe(source('app.js'))
            .pipe(gulp.dest('./dist/js'))
    }
    return rebundle()
})

gulp.task('browserify', () => {
    var b = browserify('app.js', {
        debug: true
    }).transform('babelify', {
        presets: ['es2015'],
        ignore: /\/node_modules\/(?!app\/)/
    })

    b.on('log', function (msg) {
        console.log(msg)
    })

    return b.bundle()
        .on('error', gulpUtil.log)
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('watch', ['watchJs'])
gulp.task('default', ['watch', 'browserify'])