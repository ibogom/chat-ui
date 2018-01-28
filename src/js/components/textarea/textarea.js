import React from 'react';
import PropTypes from 'prop-types';

import styles from './textarea.css'

import ValidationUtil from '../../utils/validation.util';

export default class Textarea extends React.Component {

    static propTypes = {
        avatar: PropTypes.string.isRequired,
        correlationId: PropTypes.string.isRequired,
        sendMessage: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.validation = new ValidationUtil();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showError = this.showError.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.setDefaultState = this.setDefaultState.bind(this);

        this.state = {
            value: '',
            error: ''
        };
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
            error: ''
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.validation.validate({
            value: this.state.value,
            field: 'message'
        }).then(this.sendMessage).then(this.setDefaultState).catch(this.showError);
    }

    sendMessage() {
        this.props.sendMessage({
            username: this.props.username,
            avatar: this.props.avatar,
            correlationId: this.props.correlationId,
            text: this.state.value
        });
    }

    showError(error) {
        this.setState({
            error
        });
    }

    setDefaultState(){
        this.setState({
            value: '',
            error: ''
        });
    }

    render() {
        const isFromValid = this.state.error === '';
        return (<div className={styles['user-text-area'] + ' ' + (!isFromValid ? styles.invalid : '')}>
            <form onSubmit={this.handleSubmit} className={styles.wrapper}>
                {!isFromValid ? <div className='error-message'>{this.state.error}</div> : null}
                <input type="text"
                       className={!isFromValid ? 'invalid' : ''}
                       placeholder="Please enter your message"
                       name="message"
                       value={this.state.value}
                       onChange={this.handleChange}/>
                <input type="submit" className='btn-scs' value="SEND"/>
            </form>
        </div>);
    }
};