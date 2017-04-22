import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getConversations } from '../actions/conversationActions.jsx'
import { bindActionCreators } from 'redux';

class Inbox extends Component {
  componentDidMount() {
    this.props.getConversations
  }
}