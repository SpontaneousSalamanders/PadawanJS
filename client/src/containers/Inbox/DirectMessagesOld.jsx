import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { getConversation, sendMessage, fieldInput } from '../../actions/directMessageActions.jsx'
import SingleMessage from './SingleMessage.jsx';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios'



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

    const handleSubmit = (props) => {
      console.log('inside handleSubmit', props);
      axios.post('/directMessage/', props, { headers: {
    authorization: localStorage.getItem('token') }
      });
    }

    const handleChange = (e) => {
      e.preventDefault();
      this.props.fieldInput(e.target.value)
    }



    return (
      <div>
      <div className="container" style={{width: '100%', marginTop: 100, marginLeft: 150}}>

        {this.renderMessages()}

        <label>Message:</label>

          <textarea type="text" value={this.props.field} onChange={(e) => {this.props.fieldInput(e.target.value)}}/>

          <button onClick={() => this.handleSubmit(this.props.field)}>
            Send Message
          </button>
      </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    conversations: state.conversations,
    directMessages: state.directMessages,
    mentor: state.selectedMentor,
    field: state.field,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getConversation: getConversation,
    sendMessage: sendMessage,
    fieldInput: fieldInput
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DirectMessages)