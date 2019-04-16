import React from 'react';
import { connect } from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Nav from './nav-bar';
import Landing from './landing/landing';
import Dashboard from './dashboard/dashboard';
import Learn from './learn/learn';

import { refreshAuthToken } from '../actions/auth';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // 1 hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/learn/:id" component={Learn} />
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));

