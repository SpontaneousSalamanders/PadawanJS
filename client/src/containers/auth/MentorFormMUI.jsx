import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { activateMentorProfile } from '../../actions/authActions.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TechSelect from '../../components/TechSelect.jsx';
import { Segment } from 'semantic-ui-react';

const validate = values => {
  const errors = {}
  const requiredFields = [ 'firstName', 'lastName', 'email', 'favoriteColor', 'notes' ]
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
    checked={input.value}
    onCheck={input.onChange}/>
)

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup {...input} {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}>
    {techOptions.map(option =>{
      return <RadioButton value={option.label} label={option.label}/>
    })}

  </RadioButtonGroup>
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

const techOptions = [
  {
    id: 'React',
    label: 'React'
  },
  {
    id: 'Angular',
    label: 'Angular'
  },
  {
    id: 'Backbone',
    label: 'Backbone'
  },
  {
    id: 'React Native',
    label: 'React Native'
  },
  {
    id: 'Express',
    label: 'Express'
  },
  {
    id: 'Node.js',
    label: 'Node.js'
  },
  {
    id: 'TDD',
    label: 'TDD'
  },
  {
    id: 'Redux',
    label: 'Redux'
  },
]

const formStyle = 
  {
    paddingBottom: 30,
    marginTop: 50,
  }

const MentorForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Segment>
      <MuiThemeProvider>
        <form style={formStyle} onSubmit={handleSubmit(activateMentorProfile)}>
          <div>
            <Field name="email" component={renderTextField} label="Email"/>
          </div>
          <div>
            <Field name="github" component={renderTextField} floatingLabelText="Github Handle"/>
          </div>
          <div>
            <Field name="linkedIn" component={renderTextField} floatingLabelText="LinkedIn Handle"/>
          </div>
          <div>
            <Field 
              name="description" 
              component={renderTextField}
              label="Tell us about yourself"
              multiLine={true}
              rows={2} />
          </div>
          <div>
            <Field name="location" component={renderSelectField} label="Location">
              <MenuItem value="San Francisco" primaryText="San Francisco"/>
              <MenuItem value="San Jose" primaryText="San Jose"/>
              <MenuItem value="Palo Alto" primaryText="Palo Alto"/>
            </Field>
          </div>
          <div> 
            <Field name="role" component={renderSelectField} label="Role">
              <MenuItem value="Front end" primaryText="Front end"/>
              <MenuItem value="Back end" primaryText="Back end"/>
              <MenuItem value="Full Stack" primaryText="Full Stack"/>
            </Field>
          </div>
          <div>
            Select Technologies 
            <Field name="techStack" component={props => <TechSelect options={techOptions} field={props.input}
              />} label="techStack" />

          </div>
          <div style={{marginTop: 30}}>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
          </div>
        </form>
      </MuiThemeProvider>
    </Segment>

  )
}

function mapStateToProps(state) {
  return {
    initialValues: {
      type: 'mentor'
    }
  }
}


export default reduxForm({
  form: 'mentorform',  // a unique identifier for this form
  validate,
}, mapStateToProps)(MentorForm)