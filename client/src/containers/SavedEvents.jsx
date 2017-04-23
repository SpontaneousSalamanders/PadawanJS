import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { getSavedEvents } from '../actions/savedEventsActions.jsx';
import moment from 'moment';


class SavedEvents extends Component {
  componentDidMount() {
    this.props.getSavedEvents();
  }

  render() {
    console.log('savedEvents', this.props.savedEvents);
    return (
      <div>
      <h4 style={{textAlign: 'center', marginTop: 20}}>Saved Events</h4>
      <Divider />
      <ul className="media-list">
        {this.props.savedEvents.map((event, index)=>{
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
                  <br/>
                  {event.location}
                  <br/>
                  {event.description}
                  <br/>
                  {moment(event.date).format('MMMM D YYYY')}
                  <br/>
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
    savedEvents: state.savedEvents.savedEventsData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getSavedEvents: getSavedEvents}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedEvents);