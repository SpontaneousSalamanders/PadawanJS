import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Message } from 'semantic-ui-react';

const SingleMessage = (props) => {
  const { user_name, message } = props;
  return (
    <li>
      <span>{user_name}: {message}</span>
    </li>
  )
}

export default SingleMessage;


