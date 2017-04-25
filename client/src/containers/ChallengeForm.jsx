import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { postChallenge } from '../actions/postChallengeActions.jsx';


const validate = values => {
  const errors = {}
  const requiredFields = [ 'Title', 'Description' ]
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
  const { handleSubmit, pristine, reset, submitting } = props
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
        <button type="submit" disabled={pristine || submitting}>Submit</button>
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