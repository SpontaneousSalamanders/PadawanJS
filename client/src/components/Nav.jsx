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
          <Link className="btn btn--login btn--nav" to="/signup">Sign Up</Link>
          <Link className="btn btn--login btn--nav" to="/login">Login</Link>
        </div>
      );

          <div className="nav">
        <div className="nav__wrapper">
          <Link to="/" className="nav__logo-wrapper"><h1 className="nav__logo">Login&nbsp;Flow</h1></Link>
          { navButtons }
        </div>
      </div>


    return(
      <div className="nav">
        <div className="nav__wrapper">
          <Link className="nav__logo-wrapper" to="/"><h4>PadawanJS</h4></Link>
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
