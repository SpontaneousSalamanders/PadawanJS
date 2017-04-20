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
      <Form style={{marginTop: 150}} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <label><Field name="email" component="input" type="email"/>Re-enter your email:</label>
        <label><Field name="role" component="input" type="radio" value="Full Stack"/>Full Stack</label>
        <label><Field name="role" component="input" type="radio" value="Front end"/>Front end</label>
        <label><Field name="role" component="input" type="radio" value="Back end"/>Back end</label>
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

MentorForm = reduxForm({
  form: 'mentorform',
})(MentorForm);

export default connect(mapStateToProps, actions)(MentorForm);