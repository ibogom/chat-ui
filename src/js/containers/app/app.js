import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import styles from './app.css';

/** COMPONENTS **/

import {Messenger } from '../../components';

/** CONTAINERS **/
import { LoginContainer, TextareaContainer, MessengerContainer } from '../../containers';

/** API **/
import { API } from '../../api/api';

import io from "socket.io-client";

const socket = io("https://spotim-demo-chat-server.herokuapp.com");

class App extends React.Component {

    static contextTypes = {
        store: PropTypes.object
    };

    constructor(props){
        super(props);

        this.initSocketAPI = this.initSocketAPI.bind(this);
        this.closeSocketAPI = this.closeSocketAPI.bind(this);
        this.handleMessage = this.handleMessage.bind(this);

        socket.on("connect", this.initSocketAPI);
        socket.on("disconnect", this.closeSocketAPI);
        socket.on("spotim/chat", this.handleMessage)
    }

    initSocketAPI(){
        console.log("connected to chat server!");
        this.props.dispatch(API.init(socket));
    }

    closeSocketAPI(){
        console.log("disconnected from chat server!");
        this.props.dispatch(API.close(socket));
    }

    handleMessage(message){
        if(message.correlationId !== this.props.correlationId){
            this.props.dispatch(API.handleMessage(message));
        }
    }

    render() {
        const isLoggedIn = this.props.username !== null;
        return (<div className={styles['app-wrapper'] + ' ' + (!isLoggedIn ? styles['overflow'] : '')}>
            { !isLoggedIn ? <LoginContainer/> : null }
            <MessengerContainer/>
            <TextareaContainer/>
        </div>)
    }
};

function mapStateToProps (state) {
    return {
        username: state.user.username,
        correlationId: state.chat.correlationId
    }
}

App = connect(mapStateToProps)(App);

export default App;