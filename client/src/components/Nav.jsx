/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
// import { logout } from '../actions/index.jsx';
// import LoadingButton from './LoadingButton.react';

class Nav extends Component {
  render() {
    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    const navButtons = this.props.loggedIn ? (
        <div>
          <Link to="/dashboard">Dashboard</Link>
          (<a href="#" onClick={this.logout.bind(this)}>Logout</a>)}
        </div>
      ) : (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      );

    return(
      <div>
        <div>
          <Link to="/"><h1>PadawanJS</h1></Link>
          { navButtons }
        </div>
      </div>
    );
  }

  logout() {
    this.props.dispatch(logout());
  }
}

// Nav.propTypes = {
//   loggedIn: React.PropTypes.bool.isRequired,
//   currentlySending: React.PropTypes.bool.isRequired
// }

export default Nav;
