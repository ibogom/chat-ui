import React from "react";
import {connect} from 'react-redux';
import {chat} from '../../actions';
/** COMPONENTS **/
import {Textarea} from '../../components';

const mapStateToProps = (state, ownProps) => ({
    username: state.user.username,
    avatar: state.user.avatar,
    correlationId: state.chat.correlationId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    sendMessage: chat.sendMessage
});

const TextareaContainer = connect(mapStateToProps, mapDispatchToProps)(Textarea);

export default TextareaContainer;