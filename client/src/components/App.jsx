/**
 *
 * App.jsx
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */



import React, { Component } from 'react';
import Nav from './Nav.jsx';
import { connect } from 'react-redux';
// import auth from '../utils/auth';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
  componentDidMount() {
    injectTapEventPlugin();
  }

  render() {
    return (
       <div>
        <Nav
          currentlySending={this.props.data.currentlySending}
          dispatch={this.props.dispatch}
          history={this.props.history}
          location={this.props.location}
          loggedIn={this.props.data.loggedIn}
        />  
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

