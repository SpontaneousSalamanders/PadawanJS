import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import TextField from 'material-ui/TextField'
import { sendMessage } from '../../actions/directMessageActions.jsx';

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

let ComposeMessageForm = props => {

  const { handleSubmit, pristine, reset, submitting, conversation_id, direct_message } = props;



  return (
    <form style={{height: 500}} onSubmit={handleSubmit(sendMessage.bind(this, {conversation_id:conversation_id, direct_message: direct_message}))}>
      <div>
        <label>Message:</label>
        <div>
        <Field name="direct_message" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" >Submit
        </button>
      </div>
    </form>
  )
}

ComposeMessageForm = reduxForm({
  form: 'ComposeMessageForm',
  validate,
})(ComposeMessageForm)

const selector = formValueSelector("ComposeMessageForm");

ComposeMessageForm = connect(
  state => {
   const direct_message = selector(state, 'direct_message')
   return {
      direct_message
   }
  }
)(ComposeMessageForm)




export default ComposeMessageForm;

