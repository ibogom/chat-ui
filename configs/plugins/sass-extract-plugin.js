const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globalVariables = require('../varaibles/global.variables.webpack');

var extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: globalVariables.IS_DEV_MODE
});

module.exports = extractSass;