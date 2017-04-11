/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 * This component was previously App.jsx but this serves to be the page with mentor list and search filter. See new App.jsx for reason why.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav.jsx';
import { connect } from 'react-redux';

import MentorList from '../containers/mentor_list.jsx';
// import MentorDetail from '../containers/mentor_detail';

class HomePage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { loggedIn } = this.props.data;

    return (
      <div>
        <h1>TEST PAGE THIS WOULD SHOW IF</h1>
        <MentorList />
      </div>
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