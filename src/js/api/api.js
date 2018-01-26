import io from "socket.io-client";

const socket = io("https://spotim-demo-chat-server.herokuapp.com");

socket.on("connect", function() {
    console.log("connected to chat server!");
});

socket.on("disconnect", function() {
    console.log("disconnected from chat server!");
});

const API = {

    /**
     * @param options { String } (request, success request, fail request)
     * @returns Deferred
     */

    sendRequest(options) {

        if(!options){
            console.warn('NO OPTIONS DATA');
            return false;
        }

        let dfd = new Promise((resolve, reject)=>{
            socket.emit(options.request);
            socket.on(options.success, resolve);
            socket.on(options.fail, reject);
        });

        return dfd;
    },

    io: socket
};

export default API;
