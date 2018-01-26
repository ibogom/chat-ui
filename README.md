
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
|   |   /modules                         # Webpack modules folder
|   |   /plugins                         # Webpack plugins folder
|   |   /variables                       # Global webpack variables
|   |-- base.config.js                   # Base webpack config with default properties
|   |-- dev.config.js                    # Developement webpack config   
|   |-- prod.config.js                   # Production webpack config
|   |-- jest.config.js                   # Configurations of the Unit tests (Jest)
|-- /src                                 # Application source code
|   |-- /assets                          # In this folder is stored images/fonts and css themes
|   |   |-- /themes                      # Css themes folder
|   |       |--/default                  # Default theme folder
|   |          |-- _color_scheme.scss    # Scss file with default scss color variables 
|   |          |-- _fonts.scss           # Scss file with fonts/icons and font variables 
|   |          |-- main.scss             # Main scss file of the default theme
|   |-- /js                              # Js folder
|   |   |--/actions                      # In this folder will be stored reducer action
|   |   |--/components                   # Global Reusable Components
|   |   |--/containers                   # Global Reusable Containers/Layouts Components
|   |   |--/pages                        # Pages routing
|   |   |--/reducers                     # Application reducers folder
|   |   |--/stores                       # Application stores folder
|   |   |--/test                         # Tests folder
|   |   |--main.js                       # Application bootstrap and rendering
|   |--index.html                        # Main HTML page container for app
```
 
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