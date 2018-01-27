const path = require('path');

const IS_DEV_MODE = process.env.NODE_ENV === 'development';
const BUILD_VERSION = '18.1.0';
const APP_PATH = path.join(__dirname, "../../src");
const DIST_PATH = path.join(__dirname, IS_DEV_MODE ? "../../src" : "../../public");
const HOST_NAME = 'localhost';
const DEV_SERVER_PORT = 3000;
const ACTIVE_THEME_NAME = 'default';
const CSS_VARIABLES_PATH = path.join(__dirname, '../../src/assets/themes/');

module.exports = {
    IS_DEV_MODE: IS_DEV_MODE,
    BUILD_VERSION: BUILD_VERSION,
    APP_PATH: APP_PATH,
    DIST_PATH: DIST_PATH,
    HOST_NAME: HOST_NAME,
    DEV_SERVER_PORT: DEV_SERVER_PORT,
    ACTIVE_THEME_NAME: ACTIVE_THEME_NAME,
    CSS_VARIABLES_PATH: CSS_VARIABLES_PATH
};