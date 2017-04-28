import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { postChallenge } from '../actions/postChallengeActions.jsx';
import { Button, Popup } from 'semantic-ui-react';

const validate = values => {
  const errors = {}
  const requiredFields = [ 'title', 'description' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const ChallengeForm = props => {
  const { handleSubmit, pristine, reset, submitting, valid } = props
  return (
    <form style={{height: 500}} onSubmit={handleSubmit(postChallenge)}>
      Challenge
      <div>
        <Field name="title" component={renderTextField} label="Title"/>
      </div>
      <div>
        <Field name="message" component={renderTextField} label="Question" multiLine={true} rows={2}/>
      </div>
      <div style={{marginTop: 30}}>
        <Popup trigger={<Button type="submit" disabled={pristine || submitting} >Submit</Button>} content={!valid ? 'Please fill required fields': 'Submitted'} on="click" hideOnScroll />
      </div>
    </form>
  )
}

function mapStateToProps(state) {
  return {
    initialValues: {
      user_id: state.selectedMentor.id
    }
  }
}


export default reduxForm({
  form: 'ChallengeForm',  // a unique identifier for this form
  validate,
}, mapStateToProps)(ChallengeForm)