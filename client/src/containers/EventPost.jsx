import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { postEvent } from '../actions/postEventActions.jsx';
import {Segment, Input} from 'semantic-ui-react';


class EventPost extends Component {
  render() {

    const { fields: {title, location, date, time, description} } = this.props;
    return (
        <form onSubmit={ this.props.handleSubmit(this.props.postEvent)}>
          <div style={{textAlign: 'center'}}>Post Mentorship Events</div>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title} />      
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" className="form-control" {...location} />      
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="text" className="form-control" {...date} />      
          </div>
          <div className="form-group">
            <label>Time</label>
            <input type="text" className="form-control" {...time} />      
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" {...description} />      
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>      
    )
  }
}

export default reduxForm({
  form: 'ResourcePost',
  fields: ['title', 'location', 'date', 'time', 'description']
}, null, { postEvent })(EventPost);