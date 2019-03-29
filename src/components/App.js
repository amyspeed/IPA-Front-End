import React from 'react';
import { connect } from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Nav from './nav-bar';
import Landing from './landing/landing';
import Dashboard from './dashboard/dashboard';
// import Learn from './learn/learn';
import Learn1 from './learn/learn1';
import Learn2 from './learn/learn2';
import Learn3 from './learn/learn3';
// import Instructions from './learn/instructions';
// import Module from './learn/module'
import { refreshAuthToken } from '../actions/auth';
import './App.css';

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
        {/* <Route path="/learn" component={Learn}>
          <Route path="/instructions" component={Instructions} />
          <Route path="/module" component={Module} />
        </Route> */}
        <Route path="/learn1" component={Learn1} />
        <Route path="/learn2" component={Learn2} />
        <Route path="/learn3" component={Learn3} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));

