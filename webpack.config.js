var isDevMode = process.env.NODE_ENV !== "production";

var devConfig = require('./configs/dev.config');
var prodConfig = require('./configs/prod.config');

module.exports = isDevMode ? devConfig : prodConfig;