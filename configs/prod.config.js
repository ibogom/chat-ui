const baseConfig = require('./base.config');
const globalVariables = require('./varaibles/global.variables.webpack');
const uglifyJsPlugin = require('./plugins/uglify-js-plugin');

baseConfig.plugins.push(uglifyJsPlugin);

module.exports = Object.assign({}, baseConfig, {

    output: {
        path: globalVariables.DIST_PATH,
        filename: "[name].min.[hash].js",
        publicPath: '/'
    },

    plugins: baseConfig.plugins
});