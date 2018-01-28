const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globalVariables = require('../varaibles/global.variables.webpack');
const path = require('path');

module.exports = {
    test: /\.css/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: true,
                localIdentName: globalVariables.IS_DEV_MODE ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'
            }
        }, {
            loader: 'postcss-loader',
            options:
                {
                    ident: 'postcss',
                    plugins: (loader) => [
                        require('postcss-import')({root: loader.resourcePath}),
                        require('postcss-cssnext')({
                            browsers: [
                                '>1%',
                                'last 4 versions',
                                'Firefox ESR'
                            ],
                            flexbox: 'no-2009',
                            features: {
                                customProperties: {
                                    variables: Object.assign({},
                                        require(path.join(globalVariables.CSS_VARIABLES_PATH, `/${globalVariables.ACTIVE_THEME_NAME}/css-color-variables`)),
                                        require(path.join(globalVariables.CSS_VARIABLES_PATH, '/globals/css-font-sizes')),
                                        require(path.join(globalVariables.CSS_VARIABLES_PATH, '/globals/css-icons-variables'))
                                    )
                                }
                            }
                        }),
                        require('cssnano')(),
                        require('postcss-nested')(),
                        require('postcss-extend')(),
                        require('postcss-color-function')(),
                        require('postcss-flexbugs-fixes')()
                    ]
                }
        }
        ]
    })
};