import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import Message from './Message.jsx';
// import { submitMessage, fieldInput } from '../../actions/directmessageActions.jsx'

class DirectMessages extends Component {
  componentDidMount() {
    this.props.getDirectMessages(this.props.conversation_id);
  }

  // renderDirectMessages() {
  //   return this.props.directMessages.map( (message) => {
  //     return (
  //       <li>
  //         <span>{message.user_id}</span>
  //       </li>
  //     )
  //   })
  // }

  render() {
    return (
      <div>
        <Link to="/inbox">
        <h1> Inbox </h1>
          Back to Inbox
        </Link>
        <div>
          {
            this.props.directMessages.map(message => (
              <Message message={message} />
            ))
          }
          <label htmlFor="message-input-field">Message: </label>
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
      </div>
    )
  }


}

function mapStateToProps(state) {
  return {
    directMessages: state.directMessages,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getDirectMessages: getDirectMessages}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DirectMessages)