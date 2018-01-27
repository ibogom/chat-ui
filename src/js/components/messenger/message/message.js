import React from 'react';
import PropTypes from 'prop-types';

import styles from './message.css';

export default class Message extends React.Component {

    static propTypes = {
        correlationId: PropTypes.string.isRequired,
        message: PropTypes.object.isRequired
    };

    render() {
        const isUserMessage = this.props.correlationId === this.props.message.correlationId;
        return (<li className={styles.message}>
            {isUserMessage ?
                <div className={styles['message-wrapper']}>
                    <p className={isUserMessage ? styles['user-message'] : styles['guest-message']}>
                        {this.props.message.text}
                    </p>
                    <div className={styles['avatar']}
                         style={{backgroundImage: 'url( ' + this.props.message.avatar + ')'}}
                         alt="chat avatar"/>
                </div> :
                <div className={styles['message-wrapper']}>
                    <div className={styles['avatar']}
                         style={{backgroundImage: 'url( ' + this.props.message.avatar + ')'}}
                         alt="chat avatar"/>
                    <p className={isUserMessage ? styles['user-message'] : styles['guest-message']}>
                        {this.props.message.text}
                    </p>
                </div>
            }
        </li>);
    }
};