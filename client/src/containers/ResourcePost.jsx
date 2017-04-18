import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Segment} from 'semantic-ui-react';
import { postResource } from '../actions/postResourceActions.jsx';

class ResourcePost extends Component {
  render() {
    // native function from redux form
    const { fields: {user_id, title, category, URL, description} } = this.props;

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
            <input type="text" className="form-control" {...URL} />
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

function mapStateToProps(state) {
  return {
    mentor: state.selectedMentor,
    initialValues: {
      user_id: state.selectedMentor.id
    }
  }
}

// Just like connect except reduxForm takes form fields object as first argument

export default reduxForm({
  form: 'ResourcePost',
  fields: ['user_id', 'title', 'category', 'URL', 'description'],
}, mapStateToProps, { postResource })(ResourcePost);
