/**
 * Form.jsx
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { Component } from 'react';
import ErrorSignIn from '../containers/ErrorSignInPage.jsx'
// import { changeForm } from '../actions/index.jsx';
// import loading button at some point


const assign = Object.assign;

class Form extends Component {
  render() {
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <ErrorSignIn />
        <div>
          <input type="text" id="username" placeholder="fred.zirdung" onChange={this.changeUsername.bind(this)} autoCorrect="off" autoCapitalize="off" spellCheck="false" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input id="password" type="password" placeholder="••••••••••"  onChange={this.changePassword.bind(this)} />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          (
            <button type="submit">{this.props.btnText}</button>
          )}
        </div>
      </form>
    );
  }

  // Change the username in the app state
  changeUsername(event) {
    var newState = this.mergeWithCurrentState({
      username: event.target.value
    });

    this.emitChange(newState);
  }

  // Change the password in the app state
  changePassword(event) {
    var newState = this.mergeWithCurrentState({
      password: event.target.value
    });

    this.emitChange(newState);
  }

  // Merges the current state with a change
  mergeWithCurrentState(change) {
    return assign(this.props.data, change);
  }

  // Emits a change of the form state to the application state
  emitChange(newState) {
    this.props.dispatch(changeForm(newState));
  }

  // onSubmit call the passed onSubmit function
  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.data.username, this.props.data.password);
  }
}


export default Form;
