import {userActionTypes} from '../actions';

const getAvatar = function () {
    const avatarsList = [
        'assets/images/001-snorlax.png',
        'assets/images/002-psyduck.png',
        'assets/images/003-pikachu.png',
        'assets/images/004-jigglypuff.png',
        'assets/images/005-bullbasaur.png'
    ];

    if (window.localStorage.getItem('avatar') !== null) {
        return window.localStorage.getItem('avatar');
    } else {
        const avatar = avatarsList[Math.floor(Math.random() * 5) + 1];
        window.localStorage.setItem('avatar', avatar);
        return avatar;
    }
};

const defaultState = {
    avatar: getAvatar(),
    username: null
};

const user = (state = defaultState, action) => {
    switch (action.type) {
        case userActionTypes.LOGGED_IN:
            return Object.assign({}, state, {
                username: action.username,
            });
        default:
            return state;
    }
};

export default user;