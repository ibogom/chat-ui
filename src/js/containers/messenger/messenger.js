import React from "react";
import {connect} from 'react-redux';
import { user } from '../../actions';
/** COMPONENTS **/
import {Messenger} from '../../components';

const mapStateToProps = (state, ownProps) => ({
    correlationId: state.chat.correlationId,
    messages: state.chat.messages
});

const MessengerContainer = connect(mapStateToProps)(Messenger);

export default MessengerContainer;