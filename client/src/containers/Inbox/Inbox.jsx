import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllConversations, selectConversation } from '../../actions/conversationActions.jsx'
import { bindActionCreators } from 'redux';
import InboxConversation from './InboxConversation.jsx';

class Inbox extends Component {

  componentDidMount() {
    this.props.getAllConversations();
  }

  renderConversations() {
    console.log('this.props.convo is', this.props.conversations);
    return this.props.conversations.map( (conversation) => {
      return (
        <InboxConversation conversation={conversation} user={user} onConvoClick={onConvoClick}
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
    mentor: state.selectedMentor,
    conversations: state.conversations.conversationData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllConversations: getAllConversations,
    selectConversation: selectConversation,
    onConvoClick: conversation => dispatch(selectConversation(conversation))
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox)



