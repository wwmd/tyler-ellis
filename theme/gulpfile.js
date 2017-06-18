// Gulp plugin setup
var gulp = require('gulp');

// Watches single files
var watch = require('gulp-watch');
var gulpShopify = require('gulp-shopify-upload');

// Grabs your API credentials
var config = require('./config.json');
gulp.task('shopifywatch', function() {

return watch('./theme/+(assets|layout|config|sections|snippets|templates|locales)/**')
 .pipe(gulpShopify(config.shopify_api_key, config.shopify_api_password, config.shopify_url, null));
});

// Default gulp action when gulp is run
gulp.task('default', [
  'shopifywatch'
]);
