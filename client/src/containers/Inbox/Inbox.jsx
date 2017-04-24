import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getConversations, selectConversation } from '../../actions/conversationActions.jsx'
import { bindActionCreators } from 'redux';

class Inbox extends Component {
  componentDidMount() {
    this.props.getConversations();
  }

  renderConversations() {
    return this.props.conversations.map( (conversation) => {
      return (
        <Conversation conversation={conversation} user={user} onConvoClick={onConvoClick}
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
    conversations: state.conversations,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getConversations: getConversations,
    selectConversation: selectConversation,
    onConvoClick: conversation => dispatch(selectConversation(conversation))
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox)



