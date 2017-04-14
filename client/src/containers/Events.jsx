import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../actions/eventActions.jsx';

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <div>
        Events
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getEvents: getEvents}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
