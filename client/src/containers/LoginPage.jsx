/*
 * LoginPage
 *
 * Users login on this page
 * Route: /register
 *
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
// import Form from '../components/Form.jsx';
import LoginForm from './auth/LoginForm.jsx';

// import LoadingIndicator from '../LoadingIndicator.react';

class LoginPage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { formState, currentlySending } = this.props.data;
    return (
      <div>
        <div>
          <div>
            <h2>Login</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    );
  }

  login(username, password) {
    this.props.dispatch(login(username, password));
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(LoginPage);