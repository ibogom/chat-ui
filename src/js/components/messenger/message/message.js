import React from 'react';
import PropTypes from 'prop-types';

import styles from './message.css';

export default class Message extends React.Component {

    static propTypes = {
        correlationId: PropTypes.string.isRequired,
        message: PropTypes.object.isRequired
    };

    renderUserMessege(date) {
        return <div className={styles['message-area-wrapper']}>
            <div className={styles['date'] + ' align-left'}>{ date }</div>
            <div className={styles['message-wrapper']}>
                <p className={styles['user-message']}> {this.props.message.text} </p>
                <div className={styles['avatar-wrapper']}>
                    <div className={styles['avatar']}
                         style={{backgroundImage: 'url( ' + this.props.message.avatar + ')'}} alt="chat avatar"/>
                    <div className={styles['username']}> {this.props.message.username} </div>
                </div>
            </div>
        </div>
    }

    renderGuestMessage(date) {
        return <div className={styles['message-area-wrapper']}>
            <div className={styles['date'] + ' align-right'}>{ date }</div>
            <div className={styles['message-wrapper']}>
                <div className={styles['avatar-wrapper']}>
                    <div className={styles['avatar']}
                         style={{backgroundImage: 'url( ' + this.props.message.avatar + ')'}} alt="chat avatar"/>
                    <div className={styles['username']}> {this.props.message.username} </div>
                </div>
                <p className={styles['guest-message']}> {this.props.message.text} </p>
            </div>
        </div>
    }

    getDate(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let hours = today.getHours();
        let min = today.getMinutes();
        let monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

        mm= monthes[mm];

        return `${mm} ${dd}   ${hours}:${min}`;
    }

    componentDidMount(){
        this.props.wrapper.scrollTop = this.props.wrapper.scrollHeight;
    }

    render() {
        const isUserMessage = this.props.correlationId === this.props.message.correlationId;
        const date = this.getDate();
        return (<li className={styles.message}>
            {isUserMessage ? this.renderUserMessege(date) : this.renderGuestMessage(date)}
        </li>);
    }
};