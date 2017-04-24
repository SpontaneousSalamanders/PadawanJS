import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { getConversation } from '../../actions/directmessageActions.jsx'
// import Message from './Message.jsx';
// import { submitMessage, fieldInput } from '../../actions/directmessageActions.jsx'

class DirectMessages extends Component {
  componentDidMount() {
    this.props.getConversation(this.props.conversation_id);
  }


}

function mapStateToProps(state) {
  return {
    directMessages: state.directMessages,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getConversation: getConversation}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DirectMessages)