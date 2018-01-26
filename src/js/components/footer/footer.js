import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';
export default class Footer extends React.Component {

    static propTypes = {

    };

    static defaultProps = {};

    constructor(props){
        super(props);
    }

    render(){
        return(<div className='footer'>
            <div className='one'/>
            <div className='two'/>
            <div className='three'/>
            <div className='four'/>
        </div>)
    }
};