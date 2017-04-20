/**
 * LoginForm.jsx
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { Component } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import * as actions from '../../actions/authActions.jsx';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';


const validate = values => {
  const errors = {}
  const requiredFields = [ 'email', 'password' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors;
}

const renderInput = (props) => {
  const { label, type, input, meta: { error, touched } } = props;
  return (
      <div>
        <label>{label}</label>
        <input {...input} type={type} />
          {touched && error && <div className="error">{error}</div>}
      </div>
  );
}


class LoginForm extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({email, password});
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
      <Form style={{marginTop: 150}} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field className="form-group" component={renderInput} name="email" type="email" label="Email" />
          <Field className="form-group" component={renderInput} name="password" type="password" label="Password"/>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign in</button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

LoginForm = reduxForm({
  form: 'login',
  validate,
})(LoginForm);

export default connect(mapStateToProps, actions)(LoginForm);



