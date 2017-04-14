import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';

class MessageBoard extends Component {
  render() {
    console.log('resources', this.props.resources);
    return (
      <div>
      <h4 style={{textAlign: 'center'}}>Recommended Resources</h4>
      <Divider />
      <ul className="media-list">
        {this.props.resources.map((resource, index)=>{
          return (
            <li key={index} className="media">
              <div className="media-left">
                <div 
                  style={{width: 50, cursor: 'pointer'}} 
                  className='thumbnail' 
                  onClick={()=>{window.open(resource.URL)}}>
                  <img className="media-object" src={resource.icon} alt="..."/>
                </div>
              </div>
              <div className="media-body">
                <h5 
                  style={{cursor: 'pointer'}}
                  onClick={()=>{window.open(resource.URL)}} 
                  className="media-heading" >{resource.title}</h5>
                <p>
                  {resource.description}
                </p>
              </div>
            </li>
          )
        })}
      
      </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    resources: state.resources
  }
}

export default connect(mapStateToProps)(MessageBoard);