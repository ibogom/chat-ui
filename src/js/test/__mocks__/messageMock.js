const MessageMock = {
    userMessage: {
        "username": "jake",
        "avatar": "assets/images/002-psyduck.png",
        "correlationId": "fNfCtCZzNLwz4-vNAAF1",
        "text": "Hey"
    },
    guestMessage: {
        "username": "John",
        "avatar": "assets/images/002-psyduck.png",
        "correlationId": "8Omqi2WbvDqImbFBAAF2",
        "text": "Yo"
    },
    getDate(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let hours = today.getHours();
        let min = today.getMinutes();
        let monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

        mm= monthes[mm];

        return `${mm} ${dd}   ${hours}:${min}`;
    },
    correlationId: 'fNfCtCZzNLwz4-vNAAF1'
};

export default MessageMock;