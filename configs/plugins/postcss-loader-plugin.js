const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globalVariables = require('../varaibles/global.variables.webpack');

var postCss = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    allChunks: globalVariables.IS_DEV_MODE
});

module.exports = postCss;