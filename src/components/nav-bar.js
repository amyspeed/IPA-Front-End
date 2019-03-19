import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

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
                <button onClick={() => this.logOut()}>
                    Log Out
                </button>
            );
        }
        return (
            <nav>
                <h1>Logo Here</h1>
                {logOutButton}
            </nav>
        );
    }
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);