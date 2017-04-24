import React, { Component } from 'react';
import { Link } from 'react-router';


const InboxConversation = (props) => {
  const { conversation, user, onConvoClick } = props;
  return (
    <Link to={`/inbox/${id}`} key={conversation.id}>
      <li>
        <span>{props.otherUser}</span>
        {props.latestMessage}
      </li>
    </Link>
  )
}
