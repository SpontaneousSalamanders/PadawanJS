import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { getSavedResources } from '../actions/savedResourcesActions.jsx';
import axios from 'axios';

class SavedResources extends Component {
  componentDidMount() {
    this.props.getSavedResources();
  };

  render() {
    const handleClick = (resource) => {
      axios.post('/deleteSavedResource', resource, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(() => {
        return this.props.getSavedResources();
      });
    };

    return (
      <div>
      <h4 style={{textAlign: 'center', marginTop: 20}}>My Resources</h4>
      <Divider />
      <ul className="media-list">
        {this.props.savedResources.map((resource, index)=>{
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
                  onClick={() => handleClick(resource)}
                  basic
                  style={{float: 'right'}}
                  type="button">
                  Remove
                </Button>
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
    savedResources: state.savedResources.savedResourcesData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getSavedResources: getSavedResources}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedResources);