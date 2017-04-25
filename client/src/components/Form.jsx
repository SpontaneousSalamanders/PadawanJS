/**
 * Form.jsx
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { Component } from 'react';
import ErrorSignIn from '../containers/ErrorSignInPage.jsx'



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
}


export default Form;
