import React, { Component } from 'react';
import { Link } from 'react-router';


const InboxConversation = (props) => {
  const { conversation_id, user, recentMessage } = props;
  return (
    <Link to={`/inbox/${conversation_id}`} key={conversation_id}>
      <li>
        <span>{user[0].name}</span>
        {recentMessage.direct_message}
      </li>
    </Link>
  )
}

export default InboxConversation;
