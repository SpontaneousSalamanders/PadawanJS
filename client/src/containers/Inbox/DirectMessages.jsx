import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { getConversation } from '../../actions/directMessageActions.jsx'
import SingleMessage from './SingleMessage.jsx';
// import { sendMessage, fieldInput } from '../../actions/directMessageActions.jsx'


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
    return (
      <div className="container" style={{width: '100%', marginTop: 100, marginLeft: 150}}>
        {this.renderMessages()}
      </div>
      <div>
        <label htmlFor="message-input-field">Message:</label>
          <textarea
            type="text"
            className="form-control"
            id="message-input-field"
            onChange={e => onTextInput(e.target.value)}
            value={text}
          />
          <button onClick={() => onMessageSubmit(messageSender, receiver, text, message._id)}>
            Send Message
          </button>
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