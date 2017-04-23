import React, { Component } from 'react';
import { connect } from 'react-redux';

const Conversation = (props) => {
  return (
    <Link to={`/inbox/${id}`}>
      <li>
        <span>{props.otherUser}</span>
        {props.latestMessage}
      </li>
    </Link>
  )
}


function mapStateToProps(state) {
  return {
    conversation: state.conversation,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Conversation)