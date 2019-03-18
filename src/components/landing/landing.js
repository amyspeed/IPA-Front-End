import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Dashboard } from '../dashboard/dashboard';

export default class Landing extends React.Component {
    render() {
        return (
        <Router>
            <div className = "container">
                <Route exact path="/dashboard" component={Dashboard} />
                <h1>Welcome to [aI pi eI]</h1>
                <h2>Emmersive IPA learning blah blah</h2>
                <p>
                    Some text about what the app does. 
                    ajsklj andak ajskl akslna aksnda ajksjl.
                    To begin, create a new user accout, log in,
                    or test with a demo account. 
                    Let the learning begin!
                </p>
                <h2>Sign up for a new account:</h2>
                <form>
                    <label for="firstName">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        required
                    />
                    <br />
                    <label for="lastName">Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        required
                    />
                    <br />
                    <label for="username">Create a Username</label>
                    <input
                        name="username"
                        type="text"
                        required
                    />
                    <br />
                    <label for="password">Password</label>
                    <input
                        name="password"
                        type="text"
                        placeholder="min 10 characters"
                        required
                    />
                    <br />
                    <button
                        type="submit"
                        name="submit"
                        id="registerButton"
                        className="button"
                    >
                        Register
                    </button>
                </form>
                <h2>Already Registered? Sign in:</h2>
                <form>
                    <label for="username">Username</label>
                    <input
                        name="username"
                        type="text"
                        required
                    />
                    <label for="password">Password</label>
                    <input
                        name="password"
                        type="text"
                        min="10"
                        max="72"
                        required
                    />
                    <button
                        type="submit"
                        name="submit"
                        id="logInButton"
                        className="button"
                    >
                        Log In
                    </button>
                </form>
                <h2>Not ready to commit? Try the demo:</h2>
                <form>
                    <button
                        type="submit"
                        name="submit"
                        id="demoLogIn"
                        className="button"
                    >
                        Demo Log In
                    </button>
                </form>
            </div>
        </Router>
        );
    }
}