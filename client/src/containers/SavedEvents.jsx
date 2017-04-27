import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { getSavedEvents } from '../actions/savedEventsActions.jsx';
import moment from 'moment';
import axios from 'axios';

class SavedEvents extends Component {
  componentDidMount() {
    this.props.getSavedEvents();
  };

  render() {
    const handleClick = (event) => {
      axios.post('/deleteSavedEvent', event, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(() => {
        this.props.getSavedEvents();
      });
    };

    return (
      <div style={{"height":400, "overflow":"auto"}}>
      <h4 style={{textAlign: 'center', marginTop: 20}}>Saved Events</h4>
      <Divider />
      {
        this.props.savedEvents.length > 0 ? (
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
                  <Button
                    onClick={() => handleClick(event)}
                    basic
                    style={{float: 'right'}}
                    type="button">
                    Delete
                  </Button>
                </div>
              </li>
              </Segment>
            )
          })}
        </ul>
        ) : (
        <div style={{"textAlign":"center", "marginTop":20}}>
        <p style={{"color":"#BCBCBC"}}>You have no saved events.</p>
        </div>
        )
      }
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
