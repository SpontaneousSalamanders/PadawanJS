import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment, Button } from 'semantic-ui-react';
import EnterNewComment from './EnterNewComment.jsx';
import { bindActionCreators } from 'redux';
import {
	getMessagesForQuestion,
	getQuestions,

} from '../actions/messageActions.jsx';
import ReplyToPreviousReply from '../components/ReplyToPreviousReply.jsx';

class ChallengeThread extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isExpanded: false
		}
		this.nestReplies = this.nestReplies.bind(this);
		this.renderQuestions = this.renderQuestions.bind(this);
		this.renderMessagesForQuestion = this.renderMessagesForQuestion.bind(this);
		this.expandToReplyPreviousAnswer = this.expandToReplyPreviousAnswer.bind(this);
	}

	nestReplies(replies = []) {
	  const replyMap = {};

	  replies.forEach(reply => replyMap[reply.id] = reply);

	  replies.forEach(reply => {
	    if(reply.reply_to_message_id !== reply.root_message_id) {
	      const parent = replyMap[reply.reply_to_message_id];
	      parent.children = parent.children || []
	      parent.children.push(reply);
	    }
	  });

	  return replies.filter(reply => {
	    return reply.reply_to_message_id === reply.root_message_id;
	  });
	}

	componentWillMount() {
		this.props.getQuestionsAction.getQuestions(this.props.mentor.id);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.questions && nextProps.questions.length > 1) {
			nextProps.questions.forEach((question) => {
				if (!question.hasOwnProperty('messages')) {
					nextProps.getMessagesForQuestionAction.getMessagesForQuestion(question.id);
				}
			})
		}
	}

	expandToReplyPreviousAnswer() {
		this.setState ({
			isExpanded: true
		})
		console.log(this.state.isExpanded);
	}

	renderMessagesForQuestion(messages) {
		return messages.map((message) => {
			return (
				<Segment key={message.id}>
					<bold>{message.author}</bold> - {message.message}
					{ this.state.isExpanded ? (
							<ReplyToPreviousReply id={message.id} root_message_id={message.root_message_id}/>
						) : (
							<div>
							</div>
						)
					}
					<button onClick={this.expandToReplyPreviousAnswer}>Reply</button>
					{ message.children ? this.renderMessagesForQuestion(message.children) : null }
				</Segment>
			);
		})
	}

	renderQuestions() {
		if (!this.props.questions || this.props.questions.length < 1) {
			return null;
		}

		return this.props.questions.map((question) => (
			<Segment key={question.id}>
				<bold>Question: </bold>{question.message}
				{this.renderMessagesForQuestion(this.nestReplies(question.messages))}
				<div>
					<form>
						<input />
						<br></br>
						<button type="submit">Post</button>
					</form>
				</div>
			</Segment>
		));
	}

	render () {
		return (
			<div>
				<br />
				<h3>Challenges posted by this mentor</h3>
				<Divider />
				<Segment>
					{this.renderQuestions()}
				</Segment>
			</div>
		)
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

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeThread)
