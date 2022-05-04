const { applyStyles } = require('@popperjs/core');
const mix = require('laravel-mix');

//
require('mix-env-file');
// Then pass your file to this plugin
// If this is not set, this plugin won't do anything and the default .env variables will remain
mix.env(process.env.ENV_FILE);

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/components/example3/example.js','public/js') //public/js/a.js =? a.js로 떨굼
    .vue()
    // .sass('resources/sass/app.scss', 'public/css')
    .css('resources/css/app.css', 'public/css')
    .version() //js, css => 파일 업데이트시 버전을 만들어 줘서 cache를 우회 할 수 있음 => blade에서 추가 작업 필요
    .browserSync({
        proxy: process.env.APP_URL
    });
