import React, { Component} from 'react';
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { RadioButton } from 'material-ui/RadioButton'
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker
} from 'redux-form-material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Segment } from 'semantic-ui-react';
import TimePicker from 'material-ui/TimePicker';


class EventForm extends Component {
  render() {
    return (
      <MuiThemeProvider>
   
      <form>
        <div className="form-group">
        <Field name="textarea" component={TextField} hintText="Title"/>
        </div>
        <div className="form-group">
        <Field name="plan" component={SelectField} hintText="Select a Topic">
          <MenuItem value="Node" primaryText="Node"/>
          <MenuItem value="React" primaryText="React"/>
          <MenuItem value="Angular" primaryText="Angular"/>
          <MenuItem value="Node" primaryText="Node"/>
          <MenuItem value="React" primaryText="React"/>
          <MenuItem value="Node" primaryText="Node"/>
          <MenuItem value="React" primaryText="React"/>
          <MenuItem value="Angular" primaryText="Angular"/>

        </Field>
        </div>
        <div className="form-group">
        <Field name="eventDate" component={DatePicker} format={null} hintText="What day is the event?"/>
        </div> 
        <div className="form-group">
        <Field name="eventDate" component={TimePicker} format={null} hintText="What Time is the event?"/>
        </div>
        
        <div style={{textAlign: 'center'}} className="form-group">
        <label >Description</label>
        <Field name="notes" component="textarea"/>
        </div>
      </form>
      </MuiThemeProvider>
    )
  }
}

// Decorate with redux-form
EventForm = reduxForm({
  form: 'EventForm'
})(EventForm)

export default EventForm
