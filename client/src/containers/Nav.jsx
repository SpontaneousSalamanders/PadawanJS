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
import { connect } from 'react-redux'

// import { logout } from '../actions/index.jsx';
// import LoadingButton from './LoadingButton.react';


class Nav extends Component {
  render() {
    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    let navButtons = this.props.authenticated ? (
        <div>
          <Link className="btn btn--login btn--nav" to="/inbox">Inbox</Link>
          <Link className="btn btn--login btn--nav" to="/mentorform">Become a Mentor!</Link>
          <Link className="btn btn--login btn--nav" to="/dashboard">Dashboard</Link>
          <Link className="btn btn--login btn--nav" to="/signout">Signout</Link>
        </div>
      ) : (
        <div>
          <Link className="btn btn--login btn--nav" to="/signup">Sign Up</Link>
          <Link className="btn btn--login btn--nav" to="/signin">Log in</Link>
        </div>
      );

    navButtons = this.props.mentorPrivileges ? (
      <div>
        <Link className="btn btn--login btn--nav" to="/inbox">Inbox</Link>
        <Link className="btn btn--login btn--nav" to="/dashboard">Jedi Dashboard</Link>
        <Link className="btn btn--login btn--nav" to="/signout">Signout</Link>
      </div>
      ) :
      navButtons;

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
            <span><Link className="header__findmentor" to="/find_mentor"><h4>Find Mentor</h4></Link></span>
          </div>
        </div>
      </div>

    );
  }

  logout() {
    this.props.dispatch(logout());
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    mentor_privileges: state.auth.mentor_privileges
  };
}

export default connect(mapStateToProps)(Nav);
