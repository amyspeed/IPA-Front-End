import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import Welcome from './welcome';
import Register from './register';
import LogIn from './login';
import Demo from './demo';
import './landing.css';

export function Landing(props) {
    if (props.loggedIn) {
        //redirect to dashboard if already logged in
        return <Redirect to="/dashboard" />;
    }
    
    return (
        <div className = "container">
            <Welcome />
            <Register />
            <h2>Already Registered? Sign in:</h2>
            <LogIn />
            <h2>Not ready to commit? Try the demo:</h2>
            <Demo />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);