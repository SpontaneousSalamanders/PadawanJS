import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { getResources } from '../actions/resourceActions.jsx';
import axios from 'axios';


class ResourceBoard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getResources(this.props.mentor.id);
  }

  handleClick(resource) {
    axios.post('/saveResource', resource, {
      headers: { authorization: localStorage.getItem('token') }
    });
  }

  render() {
    return (
      <div>
      <h4 style={{textAlign: 'center', marginTop: 20}}>Recommended Resources</h4>
      <Divider />
      <ul className="media-list">
        {this.props.resources.map((resource, index)=>{
          console.log('resource', resource);
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
                <Button
                  onClick={() => this.handleClick(resource)}
                  basic
                  style={{float: 'right'}}
                  type="button">
                  Save
                </Button>
              </div>
              <button
                onClick={() => this.handleClick(resource)}
                type="button">
                Save
              </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResourceBoard);