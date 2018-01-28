const CopyWebpackPlugin = require('copy-webpack-plugin');
const globalVariables = require('../varaibles/global.variables.webpack');
const path = require('path');

module.exports =new CopyWebpackPlugin([{
    from: globalVariables.IMAGE_PATH,
    to: path.join(globalVariables.DIST_PATH, '/assets/images')
}]);
