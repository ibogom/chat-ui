module.exports =  {
    test: /\.js?$|\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            "presets":['react', 'es2015'],
            "plugins": ['transform-decorators-legacy','transform-class-properties']
        }
    }
};