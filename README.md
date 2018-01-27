
# SPOT.IM CHAT
[![Build Status](https://travis-ci.org/ibogom/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/ibogom/react-redux-boilerplate/builds/277822177)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This project was started as development tools that should help web developers create new web sites/application. 

## Installation

After confirming that your environment meets the above requirements, you can create a new project based on `react-redux-boilerplate` by doing the following:

```bash
$ git clone git@github.com:ibogom/spotim-chat.git <my-project-name>
$ cd <my-project-name>
```

When that's done, install the project dependencies with `npm install`.

```bash
$ npm install
```

## Running the Project

After completing the installation step, you're ready to start the project!

```bash
$ npm run start  # Start the development server
```

## Project structure

The project structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. This structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications

```
.
|-- /configs                             # Webpack configs folder
|   |--/modules                          # Webpack modules folder
|   |--/plugins                          # Webpack plugins folder
|   |--/variables                        # Global webpack variables
|   |-- base.config.js                   # Base webpack config with default properties
|   |-- dev.config.js                    # Developement webpack config   
|   |-- prod.config.js                   # Production webpack config
|   |-- jest.config.js                   # Configurations of the Unit tests (Jest)
|-- /src                                 # Application source code
|   |-- /assets                          # In this folder is stored images/fonts and css themes
|   |   |-- /themes                      # Css themes folder
|   |       /--/globals                  # Global css variables configurations. Can be used in other themes 
|   |       |--/default                  # Name of the theme folder
|   |          |--css-color-variables.js # Css file with default postcss color variables 
|   |-- /js                              # Js folder
|   |   |--/api                          # Chat API folder
|   |   |--/actions                      # In this folder will be stored reducer action
|   |   |--/components                   # Global Reusable Components
|   |   |--/containers                   # Global Reusable Containers/Layouts Components
|   |   |--/reducers                     # Application reducers folder
|   |   |--/stores                       # Application stores folder
|   |   |--/test                         # Tests folder
|   |   |--main.js                       # Application bootstrap and rendering
|   |--index.html                        # Main HTML page container for app
```

## Styles
I am using `BEM` architecture here and also make default CSS naming map at the webpack config.
Also you can make default css variables configuration at the css-color-variables.js and this variables will be used across all your application  

```javascript
const globalVariables = require('../varaibles/global.variables.webpack');

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
                            require('postcss-flexbugs-fixes')()
                        ]
                    }
            }
            ]
        })
}
           
```

This sass configuration provide ability to get css styles with JS import. Example: 

```javascript

/* components/header/header.js */

import React from 'react';
import PropTypes from 'prop-types';

 /** IMPORT CSS CLASSES WITH HELP OF JS IMPORT **/
import {header, left, right, middle} from './header.css';
 
export default class Header extends React.Component {
 
     constructor(props){
         super(props);
     }
 
     render(){
         return(<div className={header}>
             <div className={left}>
 
             </div>
             <div className={middle}>
 
             </div>
             <div className={right}>
 
             </div>
         </div>)
     }
 };

````  
```postcss
/* components/header/header.js */

.header{
  width: 100%;
  position: relative;
  display: table;
  height: var (--header-height);
  background-color: var(--scnd-clr);
  .right{
    width: 20%;
    display: table-cell;
  }
  .middle{
    width: 60%;
    display: table-cell;
  }
  .left{
    width: 20%;
    display: table-cell;
  }
}
```
As you can see you can easily import css class names into your project and set styles directly to the html tags. 
 
## Tests
I am using `jest` for testing.  So everything you need is just open you console/terminal and type following command:

```bash
$ npm run test
```

### Test structure

```
.
|
|--/src
   |--/js
      |--/test                      # Main tests source folder
         |-- __mocks__              # Application mocks should be stored here
         |--/components             # Components test folder 
            |-- footer.test.js      # Footer component test
            |-- header.test.js      # Header tomponent test
         |--/containers             # Containers test folder
            |-- app.test.js         # App container test
```

## Thank you 

I am more than happy to accept external contributions to the project in the form of feedback, bug reports and even better - pull requests :)

Thanks for checking this out.

- Ievgen Bogomolov 