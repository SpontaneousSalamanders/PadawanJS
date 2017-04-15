import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import * as actions from '../../actions';

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
    const { handleSubmit, fields: { email, password, firstName, lastName, techStack, role, location, passwordConfirm }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>First Name:</label>
          <input className="form-control" {...firstName} />
          {firstName.touched && firstName.error && <div className="error">{firstName.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Last Name:</label>
          <input className="form-control" {...lastName} />
          {lastName.touched && lastName.error && <div className="error">{lastName.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" {...password} type="password" />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input className="form-control" {...passwordConfirm} type="password" />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="techStack">Technologies:</label>
            <input className="form-control" type="checkbox" name='React'/>
            <input className="form-control" type="checkbox" name='Angular'/>
            <input className="form-control" type="checkbox" name='Backbone'/>
            <input className="form-control" type="checkbox" name='React Native'/>
            <input className="form-control" type="checkbox" name='Express'/>
            <input className="form-control" type="checkbox" name='Node.js'/>
            <input className="form-control" type="checkbox" name='TDD'/>
            <input className="form-control" type="checkbox" name='Redux'/>
        </fieldset>
        <label>Role:</label>
        <fieldset>
          <Field name="role" component="select">
            <option></option>
            <option value="full-stack">Full Stack</option>
            <option value="front-end">Front-end</option>
            <option value="back-end">Back-end</option>
          </Field>
        </fieldset>
        <label>Location:</label>
        <fieldset>
          <Field name="location" component="select">
            <option></option>
            <option value="san-francisco">San Francisco</option>
            <option value="san-jose">San Jose</option>
            <option value="palo-alto">Palo Alto</option>
          </Field>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.firstName || !formProps.lastName) {
    errors.firstName = 'Please enter a name';
    errors.lastName = 'Please enter a name';

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ["email", "password", "firstName", "lastName", "techStack", "role", "location", "passwordConfirm"],
}, mapStateToProps)(RegisterForm);
