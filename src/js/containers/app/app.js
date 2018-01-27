import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import styles from './app.css';

/** COMPONENTS **/

import {Messenger, InputArea} from '../../components';

class App extends React.Component {

    static contextTypes = {
        store: PropTypes.object
    };

    render() {
        return (<div className={styles['app-wrapper']}>
            <Messenger/>
            <InputArea/>
        </div>)
    }
};

App = connect()(App);

export default App;