import React from 'react';
import PropTypes from 'prop-types';

import styles from './messenger.css';

import Message from './message/message';

export default class Messanger extends React.Component {

    static propTypes = {
        correlationId: PropTypes.string.isRequired,
        messages: PropTypes.array.isRequired
    };

    constructor(props){
        super(props);
        this.renderMessages = this.renderMessages.bind(this);
    }

    renderMessages(message, i){
        return <Message key={i}
                        message={message}
                        correlationId={this.props.correlationId}
                        wrapper={this.messagesWrapper} {...this.props}/>
    }

    render() {
        const messages = this.props.messages.map(this.renderMessages);

        return (<div className={styles['messages']}>
           <ul className={styles['messages-wrapper']} ref={(wrapper) => { this.messagesWrapper = wrapper; }}>
               { messages }
           </ul>
        </div>);
    }
};