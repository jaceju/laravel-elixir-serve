'use strict';

var gulp = require('gulp');
var elixir = require('laravel-elixir');
var _ = require('underscore');
var connectPhp = require('gulp-connect-php');
var config = require('laravel-elixir').config;
var Task = elixir.Task;

elixir.extend('serve', function (options) {

    options = _.extend({
        base: 'public',
        port: 8000,
        router: '../server.php',
        watch: true
    }, options);

    new Task('serve', function(){
        connectPhp.server(options, function () {
            if (options.watch) {
                gulp.start('watch');
            }
        });
        
    });
});
