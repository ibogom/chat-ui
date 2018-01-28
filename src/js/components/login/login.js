import React from 'react';
import PropTypes from 'prop-types';

import styles from './login.css';

import ValidationUtil from '../../utils/validation.util';

export default class LoginArea extends React.Component {

    static propTypes = {
        login: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showError = this.showError.bind(this);
        this.sendUsername = this.sendUsername.bind(this);

        this.validation = new ValidationUtil();

        this.state = {
            value: '',
            error: ''
        };
    }

    handleChange(e){
        this.setState({
            value: e.target.value,
            error: ''
        });
    }

    handleSubmit(e){
        e.preventDefault();

        this.validation.validate({
            value: this.state.value,
            field: 'username'
        })
            .then(this.sendUsername)
            .catch(this.showError);
    }

    sendUsername(){
        this.props.login(this.state.value);
    }

    showError(error){
        this.setState({
            error
        });
    }

    componentWillUnmount(){
        this.setState({
            value: '',
            error: ''
        });
    }

    render() {
        const isFromValid = this.state.error === '';
        return (<div className={styles["chat-login-area"]}>
            <form onSubmit={this.handleSubmit} className={styles.wrapper}>
                <div className="logo"/>
                {!isFromValid ?
                    <div className='error-message'>{this.state.error}</div> :
                    <h5 className={styles.intro}>
                        Welcome to the SpotIM chat. Please Enter your chat name to start chatting
                    </h5>
                }
                <input onChange={this.handleChange}
                       className={!isFromValid ? 'invalid' : ''}
                       type="text" placeholder="Please enter your chat name" autoFocus/>
                <input type="submit" className='btn-scs' value='JOIN'/>
            </form>
        </div>);
    }
};