import { chatActionTypes } from '../actions';

const defaultState = {
    correlationId: '',
    messages: []
};

const chat = (state = defaultState, action) => {
    switch (action.type) {
        case chatActionTypes.CHAT_SOCKET_CONNECTED:
            return Object.assign({}, state, {
                correlationId:  action.correlationId
            });
        case chatActionTypes.SEND_MESSAGE_SUCCESS:
            return Object.assign({}, state, {
                messages: [
                    ...state.messages,
                    action.messages
                ]
            });
        default:
            return state;
    }
};

export default chat;