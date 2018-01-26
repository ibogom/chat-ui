const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
   title: 'Welcome to SpotIM chat',
   template: 'index.html',
   minify: {
       collapseWhitespace: true
   }
});