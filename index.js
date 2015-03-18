'use strict';

var gulp = require('gulp');
var elixir = require('laravel-elixir');
var _ = require('underscore');
var connectPhp = require('gulp-connect-php');

elixir.extend('serve', function (options) {

    options = _.extend({
        base: 'public',
        port: 8000,
        router: '../server.php'
    }, options);

    gulp.task('php-server', function () {
        connectPhp.server(options);
    });

    return this.queueTask('php-server');
});
