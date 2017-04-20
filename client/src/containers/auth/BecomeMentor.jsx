import React, { Component } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import * as actions from '../../actions/authActions.jsx';
import { connect } from 'react-redux';

class MentorForm extends Component {
  handleFormSubmit(formProps) {
    this.props.activateMentorProfile({...formProps});
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

    // renders the sign up register form
    return (
      <Form className="form" style={{marginTop: 150}} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <label><Field name="role" component="input" type="radio" value="male"/>Full Stack</label>
        <label><Field name="role" component="input" type="radio" value="female"/>Front end</label>
        <label><Field name="role" component="input" type="radio" value="female"/>Back end</label>

          <label>Password:</label>
            <Field className="form-control" component="input" name="password" type="password" />
          <label>Confirm Password:</label>
            <Field className="form-control" component="input" name="passwordConfirm" type="password" />
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

RegisterForm = reduxForm({
  form: 'register',
})(RegisterForm);

export default connect(mapStateToProps, actions)(RegisterForm);