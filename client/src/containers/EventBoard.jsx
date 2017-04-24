import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../actions/eventActions.jsx';
import { Divider, Segment, Button } from 'semantic-ui-react';
import moment from 'moment';
import axios from 'axios';


class EventBoard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getEvents(this.props.mentor.id);
  }

  handleClick(event) {
    axios.post('/attendEvent', event, {
      headers: { authorization: localStorage.getItem('token') }
    });
  }

  render() {
    console.log('EventBoard')
    return this.props.events.length > 0 ?
    (
      <div>
      <h4 style={{textAlign: 'center'}}>Mentorship Events</h4>
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
                  <br/>
                  {event.location}
                  <br/>
                  {event.description}
                  <br/>
                  {moment(event.date).format('MMMM D YYYY')}
                  <br/>
                </p>
                <Button
                  style={{float: 'right'}}
                  onClick={() => this.handleClick(event)}
                  basic
                  type="button">
                  Attend
                </Button>
              </div>
              <button
                onClick={() => this.handleClick(event)}
                type="button">
                Attend
              </button>
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
    mentor: state.selectedMentor,
    events: state.events.eventData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getEvents: getEvents}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventBoard);
