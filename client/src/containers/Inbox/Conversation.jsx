import React, { Component } from 'react';
import { connect } from 'react-redux';

const Conversation = (props) => {
  const { conversation, user, onConvoClick } = props;
  return (
    <Link to={`/inbox/${id}` key={conversation.id}}>
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