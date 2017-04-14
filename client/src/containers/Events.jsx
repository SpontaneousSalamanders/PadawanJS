import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../actions/eventActions.jsx';

class Events extends Component {
  componentDidMount() {
    this.props.getEvents(this.props.id);
    console.log(this.props)
  }

  render() {
    return this.props.events.length > 0 ?
    (
      <div>
        Events: {this.props.events[0].title}
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
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getEvents: getEvents}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
