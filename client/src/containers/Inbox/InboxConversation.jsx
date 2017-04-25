import React, { Component } from 'react';
import { Link } from 'react-router';
import { Segment } from 'semantic-ui-react';


const InboxConversation = (props) => {
  const { conversation_id, user, recentMessage } = props;
  return (
    <Link to={`/inbox/${conversation_id}`} key={conversation_id}>
      <Segment>
        {user}:
         {recentMessage.direct_message}
      </Segment>
    </Link>
  )
}

export default InboxConversation;
