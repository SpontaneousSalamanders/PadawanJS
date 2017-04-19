import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { postEvent } from '../actions/postEventActions.jsx';
import {
  MenuItem,
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker,
} from 'redux-form-material-ui';
import TimePicker from 'material-ui/TimePicker';

const EventForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(postEvent)}>
      Event
      <div>
        <Field name="title" component={TextField} label="Title"/>
      </div>
      <div>
        <Field name="eventDate" component={DatePicker} hintText="Select a date"/>
      </div>
      <div>
        <Field name="eventTime" component={TimePicker} hintText="Select a time"/>
      </div>
      <div>
        <Field name="location" component={SelectField} label="Location">
          <MenuItem value="San Fransisco" primaryText="San Fransisco"/>
          <MenuItem value="San Jose" primaryText="San Jose"/>
          <MenuItem value="Palo Alto" primaryText="Palo Alto"/>
        </Field>
      </div>
      <div>
        <Field name="description" component={TextField} label="Description" />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'EventForm',  // a unique identifier for this form
})(EventForm)