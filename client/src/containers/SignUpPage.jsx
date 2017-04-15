/*
 * RegisterPage
 *
 * Users register on this page
 * Route: /signup
 *
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form.jsx';
// import RegisterForm from './auth/RegisterForm.jsx';
// import { sendingRequest, register } from '../../actions/AppActions';
// import LoadingIndicator from '../LoadingIndicator.react';

class SignUpPage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { formState, currentlySending } = this.props.data;
    return (
      <div>
        <div>
          <div>
            <h2>Register</h2>
          </div>
          <Form />
        </div>
      </div>
    );
  }

  // Register a user
  register(username, password) {
    this.props.dispatch(register(username, password));
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(SignUpPage);
