const webpack = require('webpack');
const path = require('path');
const globalVariables = require('./varaibles/global.variables.webpack');

/** MODULES **/
const postcssLoader = require('./modules/postcss-loader-module');
const babelLoader = require('./modules/babel-loader-module');
const imageLoader = require('./modules/image-loader-module');

/** PLUGINS **/
const postCssExtractPlugin = require('./plugins/postcss-loader-plugin');
const htmlWebpackPlugin = require('./plugins/html-webpack-plugin');

module.exports = {

    context: globalVariables.APP_PATH,

    entry: {
        main: "./js/main"
    },

    output: {
        path: globalVariables.DIST_PATH,
        filename: "[name].min.js"
    },

    module: {
        rules: [
            imageLoader,
            babelLoader,
            postcssLoader
        ]
    },

    resolve: {
        alias: {
            'globalVariables': path.resolve(__dirname, './varaibles/global.variables.webpack')
        }
    },

    plugins: [

        postCssExtractPlugin,

        new webpack.DefinePlugin({
            IS_DEV_MODE: globalVariables.IS_DEV_MODE,
            buildVersion: globalVariables.BUILD_VERSION,
            SOCKET_SEND_MESSAGE_ID: globalVariables.SOCKET_SEND_MESSAGE_ID
        }),

        new webpack.EnvironmentPlugin(['NODE_ENV']),

        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        htmlWebpackPlugin
    ]
};