import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../actions/eventActions.jsx';
import { Divider, Segment, Button, Popup } from 'semantic-ui-react';
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
    return (
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
              </div>
              <div className="media-right">
                <Popup
                  trigger={<Button
                  style={{float: 'right'}}
                  onClick={() => this.handleClick(event)}
                  basic>Attend</Button>}
                  content="Added to your Events"
                  on="click"
                  hideOnScroll
                />

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
    events: state.events.eventData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getEvents: getEvents}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventBoard);
