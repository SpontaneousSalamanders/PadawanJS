/*
 * LoginPage
 *
 * Users login on this page
 * Route: /register
 *
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import Form from '../containers/Form.jsx';
// import { sendingRequest, register } from '../../actions/index.jsx';
// import LoadingIndicator from '../LoadingIndicator.react';

class LoginPage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { formState, currentlySending } = this.props.data;
    return (
      // many divs for CSS classNames - later
      <div>
        <div>
          <div>
            <h2>Login</h2>
          </div>
          {/* While the form is sending, show the loading indicator,
            otherwise show "Log in" on the submit button */}
          <Form data={formState} dispatch={dispatch} location={location} history={this.props.history} onSubmit={this.login.bind(this)} btnText={"Login"} currentlySending={currentlySending}/>
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