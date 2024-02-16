let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist').setPublicPath('dist');
mix.sass('src/scss/app.scss', 'dist').setPublicPath('dist');
mix.sass('src/scss/style.scss', 'dist').setPublicPath('dist');