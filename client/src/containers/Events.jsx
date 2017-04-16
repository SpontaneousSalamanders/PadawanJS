import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../actions/eventActions.jsx';
import { Divider, Segment } from 'semantic-ui-react';

class Events extends Component {
  componentDidMount() {
    this.props.getEvents(this.props.id);
  }

  render() {
    return this.props.events.length > 0 ?
    (
      <div>
      <h4 style={{textAlign: 'center'}}>Events</h4>
      <Divider />
      <ul className="media-list">
        {this.props.events.map((event, index)=>{
          return (
            <Segment>
            <li key={index} className="media">
              <div className="media-left">
                <div
                  style={{width: 50, cursor: 'pointer'}}
                  className='thumbnail'
                  >
                  <img className="media-object" src='https://d30y9cdsu7xlg0.cloudfront.net/png/89454-200.png' alt="..."/>
                </div>
              </div>
              <div className="media-body">
                <h5
                  style={{cursor: 'pointer'}}
                
                  className="media-heading" >{event.title}</h5>
                <p>
                  {event.description}
                </p>
              </div>
            </li>
            </Segment>
          )
        })}

      </ul>
      </div>
    )
    :
    (
      <div></div>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events.eventData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getEvents: getEvents}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
