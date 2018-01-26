import * as chatActionTypes from './chatActionTypes';
import API from '../../api/api';

export function sendMessage() {
    return {
        type: chatActionTypes.SEND_MESSAGE
    }
};