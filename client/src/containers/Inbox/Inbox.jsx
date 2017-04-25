import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllConversations} from '../../actions/conversationActions.jsx'
import { getConversation } from '../../actions/directMessageActions.jsx'
import { bindActionCreators } from 'redux';
import InboxConversation from './InboxConversation.jsx';

class Inbox extends Component {

  handleSubmit(conversation_id) {
    console.log(conversation_id)
    this.props.getConversation(conversation_id)
  }

  componentDidMount() {
    this.props.getAllConversations();
  }

  renderConversations() {
    console.log('this.props.convo is', this.props.conversations);
    return this.props.conversations.conversations.map( (conversation) => {
      let name = conversation.recentUser[0].name.split(' ');

      return (
        <InboxConversation conversation_id = {conversation.lastMessage.conversation_id}
        user = {name[0]}
        recentMessage={conversation.lastMessage} handleSubmit={this.handleSubmit.bind(this)}
        />
      )
    })
  }

  render() {
    return (
      <div className="container" style={{width: '100%', marginTop: 100, marginLeft: 150}}>
        <div className="row">
          {this.renderConversations()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    conversations: state.conversations
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllConversations: getAllConversations,
    getConversation: getConversation,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox)