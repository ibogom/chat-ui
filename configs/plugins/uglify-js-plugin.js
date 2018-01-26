const webpack = require('webpack');

const jsUglify = new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    comments: false,
    compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: false,
        evaluate: false,
        if_return: true,
        join_vars: true
    }
});

module.exports = jsUglify;
