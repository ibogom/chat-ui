import {chat} from '../actions';

const API = {

    init(io) {
        this.socket = io;
        return chat.chatSocketConnected(io.id);
    },

    close() {
        delete this.socket;
        return chat.chatSocketDisconnected();
    },

    handleMessage(message){
        return chat.sendMessageSuccess(message);
    },

    /**
     * @param id { String } request name
     * @param data { Object } data that should be send
     * @returns Deferred
     */

    sendRequest(id, data) {

        if (!id) {
            console.warn('REQUEST ID IS NOT PROVIDED');
            return false;
        }

        if (!this.socket) {
            console.warn('SOCKET IS NOT CONNECTED');
            return false;
        }

        this.socket.emit(id, data);
    }
};

export {API};
