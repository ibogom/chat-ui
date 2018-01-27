/** REACT COMPONENTS **/
import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';

/** CONTAINERS **/
import {App} from './containers';

/** STORES **/
import store from './stores';

/** THEMES **/
import './main.css';

/** API **/


render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('app'));