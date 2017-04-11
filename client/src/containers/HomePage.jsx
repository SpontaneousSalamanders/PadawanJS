/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../containers/Nav.jsx';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { loggedIn } = this.props.data;

    return (


    );
  }
}

function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);