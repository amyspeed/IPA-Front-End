import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import Welcome from './welcome';
import Register from './register';
import LogIn from './login';
import Demo from './demo';
import './landing.css';
import welcome from '../../images/marginalia-welcome.png';

export function Landing(props) {
    if (props.loggedIn) {
        //redirect to dashboard if already logged in
        return <Redirect to="/dashboard" />;
    }
    
    return (
        <div className = "landing">
            <div className="row">
                <div className="col-12">
                    <Welcome />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="box">
                        <img className="box-image" src={welcome} alt="person waving" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="box">
                        <h2>Sign up for a new account:</h2>
                        <Register />
                    </div>
                </div>
                <div className="col-4">
                    <div className="box">
                        <h2>Already Registered? Sign in:</h2>
                        <LogIn />
                        <h2>Not ready to commit? Try the demo:</h2>
                        <Demo />
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);