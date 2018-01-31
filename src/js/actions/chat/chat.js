import * as chatActionTypes from './chatActionTypes';
import globalVariables from 'globalVariables';

import {API} from '../../api/api';

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
    return API.sendRequest(globalVariables.SOCKET_VARIABLES.CHAT_SEND_MESSAGE_ID, message);
};