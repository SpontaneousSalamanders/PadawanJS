import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { getConversation } from '../../actions/directMessageActions.jsx'
import SingleMessage from './SingleMessage.jsx';
import ComposeMessage from './ComposeMessage.jsx';

class DirectMessages extends Component {

  renderMessages() {

    return this.props.directMessages.directMessages.map( (message) => {
      let name = message.user[0].name.split(' ');

      return (
        <SingleMessage user_id={message.message.user_id} message={message.message.direct_message} timestamp={message.message.created_at} user_name={name[0]} user_pic={message.user[0].pic}
        />
      )

    })

  }

  render() {

    var conversation_id = this.props.location.pathname.slice(7);
    console.log ('current path is:', conversation_id);

    return (
      <div className="container" style={{width: '100%', marginTop: 100, marginLeft: 150}}>
        {this.renderMessages()}
        <ComposeMessage conversation_id={conversation_id}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    conversations: state.conversations,
    directMessages: state.directMessages,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getConversation: getConversation}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DirectMessages)