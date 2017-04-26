import React from 'react'
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form'
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

const ComposeMessageForm = props => {

  const { handleSubmit, pristine, reset, submitting, conversation_id, direct_message } = props

  return (
    <form style={{height: 500}} onSubmit={handleSubmit(sendMessage.bind(this, {conversation_id:conversation_id, direct_message:direct_message}))}>
      <div>
        <label>Notes</label>
        <div>
        <Field name="direct_message" component="textarea" {...direct_message} />
        </div>
      </div>
      <div>
        <button type="submit" >Submit
        </button>
      </div>
    </form>
  )
}

function mapStateToProps(state) {
  return {
    initialValues: {
      conversation_id: conversation_id
    }
  }
}

export default reduxForm({
  form: 'ComposeMessageForm',
  enableReinitialize: true,
  validate,
}, mapStateToProps)(ComposeMessageForm)


