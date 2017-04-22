import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
// import { getSavedResources } from '../actions/savedResourceActions.jsx';
// import { getResources } from '../actions/resourceActions.jsx';


class SavedResources extends Component {
  componentDidMount() {
    this.props.getResources(this.props.mentor.id);
  }

  render() {
    console.log('resources', this.props.resources);
    return (
      <div>
      <h4 style={{textAlign: 'center', marginTop: 20}}>Recommended Resources</h4>
      <Divider />
      <ul className="media-list">
        {this.props.resources.map((resource, index)=>{
          return (
            <Segment key={index}>
            <li key={index} className="media">
              <div className="media-left">
                <div
                  key={index}
                  style={{width: 50, cursor: 'pointer'}}
                  className='thumbnail'
                  onClick={()=>{window.open(resource.URL)}}>
                  <img
                    className="media-object"
                    src={resource.icon}
                    key={index}
                    alt="..."/>
                </div>
              </div>
              <div
                key={index}
                className="media-body">
                <h5
                  style={{cursor: 'pointer'}}
                  onClick={()=>{window.open(resource.URL)}}
                  className="media-heading" >{resource.title}</h5>
                <p key={index}>
                  {resource.description}
                </p>
              </div>
            </li>
            </Segment>
          )
        })}

      </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mentor: state.selectedMentor,
    resources: state.resources.resourceData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getResources: getResources}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedResources);