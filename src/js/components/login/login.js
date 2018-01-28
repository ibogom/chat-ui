import React from 'react';
import PropTypes from 'prop-types';

import styles from './login.css';

export default class LoginArea extends React.Component {

    static propTypes = {};

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
            this.props.login(this.state.value);
        } else {
            this.setState({
                error: 'Username field could not be empty!'
            });
        }
    }

    render() {
        return (<div className={styles["chat-login-area"]}>
            <form onSubmit={this.handleSubmit} className={styles.wrapper}>
                <div className="logo"/>
                <h5 className={styles.intro}>Welcome to the SpotIM chat. Please Enter your chat name to start chatting</h5>
                <input onChange={this.handleChange} type="text" placeholder="Please enter your chat name" autoFocus/>
                <input type="submit" className='btn-scs' value='JOIN'/>
            </form>
        </div>);
    }
};