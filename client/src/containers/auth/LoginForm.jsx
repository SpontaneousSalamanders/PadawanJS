/**
 * LoginForm.jsx
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions/authActions.jsx'



class LoginForm extends Component {
  handleFormSubmit(formProps, dispatch) {
    return dispatch(this.props.signinUser({...formProps}));
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form style={{marginTop: 150}} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <label>Email:</label>
          <Field className="form-group" name="email" type="email" />
          <label>Password:</label>
            <Field className="form-group" name="password" type="password" />
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'login',
}, mapStateToProps, actions)(LoginForm);



