const baseConfig = require('./base.config');
const globalVariables = require('./varaibles/global.variables.webpack');

/** PLUGINS **/
const uglifyJsPlugin = require('./plugins/uglify-js-plugin');
const copyWebpackPLugin = require('./plugins/copy-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {

    output: {
        path: globalVariables.DIST_PATH,
        filename: "[name].min.[hash].js",
        publicPath: '/'
    },

    devServer: {
        contentBase: globalVariables.DIST_PATH,
        host: globalVariables.HOST_NAME,
        port: globalVariables.DEV_SERVER_PORT,
        historyApiFallback: true,
        hot: true
    },

    plugins: [
        ...baseConfig.plugins,
        uglifyJsPlugin,
        copyWebpackPLugin
    ]
});