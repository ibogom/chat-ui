module.exports = {
    test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
    use: {
        loader: 'url-loader?limit=100000'
    }
};