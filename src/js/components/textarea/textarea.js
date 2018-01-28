import React from 'react';
import PropTypes from 'prop-types';

import styles from './textarea.css'

export default class Textarea extends React.Component {

    static propTypes = {

    };

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            value: e.target.value,
            error: ''
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.value !== ''){
            this.setState({
                value: ''
            });
            this.props.sendMessage({
                username: this.props.username,
                avatar: this.props.avatar,
                correlationId: this.props.correlationId,
                text: this.state.value
            });
        } else {
            this.setState({
                error: 'Message field could not be empty!'
            });
        }
    }

    render() {
        const isFromValid = this.state.error === '';
        return (<div className={styles['user-text-area'] + ' ' + (!isFromValid? styles.invalid : '')}>
            <form onSubmit={this.handleSubmit} className={styles.wrapper}>
                {!isFromValid ? <div className={styles['error-message']}>{this.state.error}</div> : null}
                <input type="text"
                       className={!isFromValid ? styles.invalid : ''}
                       placeholder="Please enter your message"
                       value={this.state.value}
                       onChange={this.handleChange}/>
                <input type="submit" className='btn-scs' value="SEND"/>
            </form>
        </div>);
    }
};