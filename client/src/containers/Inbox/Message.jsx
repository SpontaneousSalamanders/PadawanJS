import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

const Message (props) => {
  return (
    <Message compact>
      {props.user_name}: {props.message}
    </Message>
  )
}



}


