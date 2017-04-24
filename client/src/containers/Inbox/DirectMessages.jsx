import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class DirectMessage extends Component {
  componentDidMount() {
    this.props.getDirectMessages(this.props.conversation_id);
  }

  renderDirectMessages() {
    return this.props.directMessages.map( (message) => {
      return (
        <li>
          <span>{message.user_id}</span>
        </li>
      )
    })
  }


}

function mapStateToProps(state) {
  return {
    directMessages: state.directMessages,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getDirectMessages: getDirectMessages}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DirectMessages)