import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

/** REDUCERS **/
import AppReducers from '../reducers';

const store = createStore(AppReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(thunk)));

export default store;