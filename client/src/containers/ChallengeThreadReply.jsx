import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment, Button } from 'semantic-ui-react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import {
  getMessagesForQuestion,
  getQuestions,

} from '../actions/messageActions.jsx';

class ChallengeThreadReply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();

    this.setState({
      reply: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();

    axios.post('/postReply',
      {
        message: this.state.reply,
        reply_to_message_id: this.props.id,
      },
      { headers: { authorization: localStorage.getItem('token') }
    })
    .then(() => {
      this.setState({ reply: '' })
      this.props.getQuestionsAction.getQuestions(this.props.mentor.id);
    });
  }

  render() {
    return (
     <div style={{overflow: 'hidden'}}>
       <form>
         <input
          value={this.state.reply}
          placeholder={"Reply to " + this.props.name.split(' ')[0]}
          onChange={this.handleInputChange}/>
         <Button
          onClick={this.handleClick}
          basic
          style={{'float':'right'}}>
          Post
        </Button>
       </form>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mentor: state.selectedMentor,
    questions: state.messages.questions,
    messagesForQuestions: state.messages.messagesForQuestions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getQuestionsAction: bindActionCreators({getQuestions: getQuestions}, dispatch),
    getMessagesForQuestionAction: bindActionCreators({getMessagesForQuestion: getMessagesForQuestion}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeThreadReply)
