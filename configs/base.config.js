const webpack = require('webpack');

const globalVariables = require('./varaibles/global.variables.webpack');

/** MODULES **/
const sassLoader = require('./modules/sass-loader-module');
const babelLoader = require('./modules/babel-loader-module');
const imageLoader = require('./modules/image-loader-module');

/** PLUGINS **/
const sassExtractPlugin = require('./plugins/sass-extract-plugin');
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
            sassLoader
        ]
    },

    plugins: [

        sassExtractPlugin,

        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            buildVersion: globalVariables.BUILD_VERSION
        }),

        new webpack.EnvironmentPlugin(['NODE_ENV']),

        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        htmlWebpackPlugin
    ]
};