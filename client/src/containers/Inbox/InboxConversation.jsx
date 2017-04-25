import React, { Component } from 'react';
import { Link } from 'react-router';
import { Segment } from 'semantic-ui-react';
import { getConversation } from '../../actions/directMessageActions.jsx';

// add an on-click function that selects the correct

const InboxConversation = (props) => {
  const { conversation_id, user, recentMessage, handleSubmit } = props;
  console.log('convo id in inbox conv', conversation_id)
  return (
    <Link to={`/inbox/${conversation_id}`} key={conversation_id}>
    <button
      type="button" onClick={() => handleSubmit(conversation_id)}
    >
      <Segment>
        {user}: {recentMessage.direct_message}
      </Segment>
    </button>

    </Link>
  )
}

export default InboxConversation;
