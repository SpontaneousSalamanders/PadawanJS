import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { postEvent } from '../actions/postEventActions.jsx';
import FlatButton from 'material-ui/FlatButton';
import {
  TimePicker,
  DatePicker,
} from 'redux-form-material-ui';
import { Button } from 'semantic-ui-react';
import { GET_EVENTS } from '../actions/eventActions.jsx';

const validate = values => {
  const errors = {}
  const requiredFields = [ 'Title', 'Location', 'Description', 'Event Date', 'Event Time' ]
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

const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}/>
)

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup {...input} {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}/>
)

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}/>
)

const renderTimePicker = props => (
  <TimePicker
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
  />
)
const renderDatePicker = props => (
  <DatePicker
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
  />
)

const EventForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form style={{height: 500}} onSubmit={handleSubmit}>
      Event
      <div>
        <Field name="title" component={renderTextField} label="Title"/>
      </div>
      <div>
        <Field name="location" component={renderSelectField} label="Location">
          <MenuItem value="San Francisco" primaryText="San Francisco"/>
          <MenuItem value="San Jose" primaryText="San Jose"/>
          <MenuItem value="Palo Alto" primaryText="Palo Alto"/>
        </Field>
      </div>
      <div>
        <Field name="description" component={renderTextField} label="Description" multiLine={true} rows={2}/>
      </div>
      <div>
        <Field
          name="date"
          label="Event Date"
          component={renderDatePicker}
          format={null} />
      </div>
      <div>
        <Field
          name="time"
          component={renderTimePicker}
          label="Event Time"
          format={null} />
      </div>
      <div style={{marginTop: 30}}>
        <Button type="submit" disabled={pristine || submitting}>Submit</Button>
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


export default connect(null, {
  onSubmit: postEvent
})(reduxForm({
  form: 'EventForm',  // a unique identifier for this form
  validate,
}, mapStateToProps)(EventForm))