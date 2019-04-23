import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom';
import './nav-bar.css';

export class Nav extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton;
        //Button appears when user is logged in
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="log-out" onClick={() => this.logOut()}>
                    Log Out 👋
                </button>
            );
        }
        return (
            <nav role="navigation">
                <h1 className="h1-logo">
                    <Link className="logo" to="/">[aI pi eI]</Link>
                </h1>
                {logOutButton}
            </nav>
        );
    }
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);