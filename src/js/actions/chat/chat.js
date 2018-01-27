import * as chatActionTypes from './chatActionTypes';
import { API } from '../../api/api';

export function sendMessageSuccess(messages) {
    return {
        type: chatActionTypes.SEND_MESSAGE_SUCCESS,
        messages
    }
}

export function sendMessageFailed(err) {
    return {
        type: chatActionTypes.SEND_MESSAGE_FAIL,
        err
    }
}

export function chatSocketConnected(correlationId) {
     return {
            type: chatActionTypes.CHAT_SOCKET_CONNECTED,
            correlationId
     };
}

export function chatSocketDisconnected() {
    return {
        type: chatActionTypes.CHAT_SOCKET_DISCONNECTED,
        correlationId: null
    };
}

export function sendMessage(message) {
    return dispatch => {
        return API.sendRequest('spotim/chat', message)
            .then(response => dispatch(sendMessageSuccess(response)))
            .catch(error => dispatch(sendMessageFailed(error)))
    }
};