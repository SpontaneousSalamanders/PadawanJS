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
      <div>
        <label><Field name="email" component="input" type="email"/>Re-enter your email:</label>
      </div>
      <div>
        <label><Field name="role" component="input" type="radio" value="Full Stack"/>Full Stack</label>
      </div>
      <div>
        <label><Field name="role" component="input" type="radio" value="Front end"/>Front end</label>
      </div>
      <div>
        <label><Field name="role" component="input" type="radio" value="Back end"/>Back end</label>
      </div>
      <div>
      <div>
        <Field name="location" component="select">
          <option></option>
          <option value="San Francisco">San Francisco</option>
          <option value="San Jose">San Jose</option>
          <option value="Palo Alto">Palo Alto</option>
        </Field>
      </div>



        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Submit Jedi Application!</button>
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