import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import {Segment} from 'semantic-ui-react';
import { postResource } from '../actions/postResourceActions.jsx';

class ResourcePost extends Component {
  render() {
    // native function from redux form
    const { fields: {title, category, url, description} } = this.props;
    return (
      <Segment>
        <form onSubmit={ this.props.handleSubmit(this.props.postResource)}>
          <div>Post Resources</div>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title} />      
          </div>
          <div className="form-group">
            <label>Category</label>
            <input type="text" className="form-control" {...category} />      
          </div>
          <div className="form-group">
            <label>URL</label>
            <input type="text" className="form-control" {...url} />      
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" {...description} />      
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>      
      </Segment>
    )
  }
}

// Just like connect except reduxForm takes form fields object as first argument 

export default reduxForm({
  form: 'ResourcePost',
  fields: ['title', 'category', 'url', 'description']
}, null, { postResource })(ResourcePost);