# laravel-elixir-serve

## Install

Install package:

```sh
$ npm install laravel-elixir-serve --save-dev
```

## Usage

Run browser-sync and pass request to built-in web server:

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-serve');

elixir(function(mix) {
  mix.serve({
    port: 8888
  });
});
```

Or run browser-sync with proxy:

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-serve');

elixir(function(mix) {
  mix.serve({
    port: 8888
  }).browserSync({
    proxy: 'localhost:8888'
  });
});
```

Then run:

```sh
$ gulp watch
```
