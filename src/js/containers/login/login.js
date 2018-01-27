import React from "react";
import {connect} from 'react-redux';
import { user } from '../../actions';
/** COMPONENTS **/
import {Login} from '../../components';

const mapStateToProps = (state, ownProps) => ({
    username: state.user.username
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (username) => {
        dispatch(user.login(username));
    }
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;