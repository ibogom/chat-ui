import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import './app.scss';

/** COMPONENTS **/

class App extends React.Component {

    static contextTypes = {
        store: PropTypes.object
    };

    render() {
        return (<div className='appWrapper'>

                </div>)
    }
};

App = connect()(App);

export default App;