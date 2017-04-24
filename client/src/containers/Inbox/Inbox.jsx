import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllConversations, selectConversation} from '../../actions/conversationActions.jsx'
import { bindActionCreators } from 'redux';
import InboxConversation from './InboxConversation.jsx';

class Inbox extends Component {

  componentDidMount() {
    this.props.getAllConversations();
  }

  renderConversations() {
    console.log('this.props.convo is', this.props.conversations);
    return this.props.conversations.conversations.map( (conversation) => {
      return (
        <InboxConversation conversation={conversation}
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
    selectConversation: selectConversation,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox)



