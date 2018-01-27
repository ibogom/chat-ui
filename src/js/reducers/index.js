import { combineReducers } from 'redux';
import chat from './chat';
import user from './user';

const AppReducers = combineReducers({
    chat,
    user
});

export default AppReducers