/**
 *
 * App.jsx
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */



import React, { Component } from 'react';
import Nav from './Nav.react';
import { connect } from 'react-redux';
// import auth from '../utils/auth';
class App extends Component {
  render() {
    return (
       <div>
        <Nav loggedIn={this.props.data.loggedIn} history={this.props.history} location={this.props.location} dispatch={this.props.dispatch} currentlySending={this.props.data.currentlySending} />
        { this.props.children }
      </div>
    )
  }
}

// export default App
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);

