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
          {/* While the form is sending, show the loading indicator,
            otherwise show "Register" on the submit button */}
          <Form data={formState} dispatch={dispatch} location={location} history={this.props.history} onSubmit={this.register.bind(this)} btnText={"Register"} currentlySending={currentlySending}/>
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
