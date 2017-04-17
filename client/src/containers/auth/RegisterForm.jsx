import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/authActions.jsx';

class RegisterForm extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
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
    const { handleSubmit, fields: { email, password, firstName, lastName, passwordConfirm }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>First Name:</label>
          <input className="form-control" {...firstName} />
        </fieldset>
        <fieldset className="form-group">
          <label>Last Name:</label>
          <input className="form-control" {...lastName} />
        </fieldset>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" {...password} type="password" />

        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input className="form-control" {...passwordConfirm} type="password" />

        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

// function validate(formProps) {
//   const errors = {};

//   if (!formProps.firstName || !formProps.lastName) {
//     errors.firstName = 'Please enter a name';
//     errors.lastName = 'Please enter a name';

//   if (!formProps.email) {
//     errors.email = 'Please enter an email';
//   }

//   if (!formProps.password) {
//     errors.password = 'Please enter a password';
//   }

//   if (!formProps.passwordConfirm) {
//     errors.passwordConfirm = 'Please enter a password confirmation';
//   }

//   if (formProps.password !== formProps.passwordConfirm) {
//     errors.password = 'Passwords must match';
//   }

//   return errors;
// }

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'register',
  fields: ["email", "password", "firstName", "lastName", "passwordConfirm"]
}, mapStateToProps, actions)(RegisterForm);
