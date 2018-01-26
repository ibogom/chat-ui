const ExtractTextPlugin = require('extract-text-webpack-plugin');
const gloablVariables = require('../varaibles/global.variables.webpack');

module.exports = {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                query: {
                    sourceMap: gloablVariables.IS_DEV_MODE
                }
            },
            'sass-loader'
        ]
    })
};
