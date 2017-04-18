/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { Divider } from 'semantic-ui-react';

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

    return(
      <div>
        <div className="nav">
          <div className="nav__wrapper">
            <Link className="nav__logo-wrapper" to="/"><img src="/logo.png" id="logo" /></Link>
            { navButtons }
          </div>
        </div>
        <div className="header_menus">
          <div className="header__wrapper">
            <Link className="header__findmentor" to="/find_mentor"><h4>Find Mentor</h4></Link>
          </div>
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
