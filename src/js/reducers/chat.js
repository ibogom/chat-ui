import { chatActionTypes } from '../actions';

const chat = (state = [], action) => {
    switch (action.type) {
        case chatActionTypes.RECEIVE_MESSAGE:
            return {
                messages: action.messages,
            };
        default:
            return state;
    }
};

export default chat;