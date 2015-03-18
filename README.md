# laravel-elixir-serve

## Install

```sh
$ npm install laravel-elixir-serve --save-dev
```

## Usage

Start built-in web server:

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-serve');

elixir(function(mix) {
  mix.serve();
});
```

Or start it with browser-sync and custom port:

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-serve');
require('laravel-elixir-browser-sync');

elixir(function(mix) {
  var port = 8888;

  mix.serve({
    port: port
  }).browserSync(null, {
    proxy: 'localhost:' + port
  });

});
```

Then run:

```sh
$ gulp serve
```

## Options

See [gulp-connect-php](https://github.com/micahblu/gulp-connect-php#options)

### watch

Type: `boolen`<br/>
Default: `true`

Call `watch` task.
