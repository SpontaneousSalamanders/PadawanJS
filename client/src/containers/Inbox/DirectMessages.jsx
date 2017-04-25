import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { getConversation } from '../../actions/directMessageActions.jsx'
import Message from './Message.jsx';
// import { submitMessage, fieldInput } from '../../actions/directmessageActions.jsx'


class DirectMessages extends Component {
  componentDidMount() {
    this.props.getConversation(this.props.conversations.conversations[0].lastMessage.conversation_id);
  }

  renderMessages() {

    return this.props.directMessages.directMessages.map( (item) => {

      return (
        <Message user_id={item.message.user_id} message={item.message.direct_message} timestamp={item.message.created_at} user_name={item.user.name} user_pic={item.user.pic}
        />
      )

    })

    console.log('what is convo_id?: ', this.props.conversations.conversations[0].lastMessage.conversation_id);

    console.log('other', this.props.directMessages.directMessages)






  }

  render() {
    return (
      <div className="container" style={{width: '100%', marginTop: 100, marginLeft: 150}}>
        {this.renderMessages()}
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