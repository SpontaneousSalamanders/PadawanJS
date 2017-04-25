import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment } from 'semantic-ui-react';
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
		this.renderQuestions = this.renderQuestions.bind(this);
		this.renderMessagesForQuestion = this.renderMessagesForQuestion.bind(this);
		this.expandToReplyPreviousAnswer = this.expandToReplyPreviousAnswer.bind(this);
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

	renderMessagesForQuestion(question) {
		if (!question.hasOwnProperty('messages')) {
			return null;
		}

		return question.messages.map((message) => {
			return (
				<Segment key={message.id}>
					<bold>{message.author}</bold> - {message.message}
					{ this.state.isExpanded ? (
							<ReplyToPreviousReply />
						) : (
							<div>
								this means the this.state.isExpanded is false :(
							</div>
						)
					} 
					<button onClick={this.expandToReplyPreviousAnswer}>Reply</button>
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
				{this.renderMessagesForQuestion(question)}
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
