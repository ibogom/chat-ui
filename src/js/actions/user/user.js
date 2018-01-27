import * as userActionTypes from './userActionTypes';

export function login(username) {
    return {
        type: userActionTypes.LOGGED_IN,
        username
    }
};