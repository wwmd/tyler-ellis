var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpShopify = require('gulp-shopify-upload');
var argv = require('yargs').argv;
var devConfig = require('./config/deploy/devConfig.json');
var stagingConfig = require('./config/deploy/stagingConfig.json');
var presentationConfig = require('./config/deploy/presentationConfig.json');
var liveConfig = require('./config/deploy/liveConfig.json');

var environment = argv.env || 'dev'

var credentials

switch (environment) {
  case 'staging':
    credentials = stagingConfig
    break;

  case 'presentation':
    credentials = presentationConfig
    break;

  case 'live':
    credentials = liveConfig
    break;

  default:
    credentials = devConfig
    break;
}

gulp.task('shopifywatch', function() {

return watch('**')
 .pipe(gulpShopify(
   credentials.shopify_api_key,
   credentials.shopify_api_password,
   credentials.shopify_url
  ));
});

gulp.task('default', [
  'shopifywatch'
]);
