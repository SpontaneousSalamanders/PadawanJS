import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment, Button } from 'semantic-ui-react';
import EnterNewComment from './EnterNewComment.jsx';
import { bindActionCreators } from 'redux';
import {
	getMessagesForQuestion,
	getQuestions,

} from '../actions/messageActions.jsx';
import ChallengeThreadReply from './ChallengeThreadReply.jsx';

class ChallengeThread extends Component {
	componentWillMount() {
		this.props.getQuestionsAction.getQuestions(this.props.mentor.id);
	}

	renderMessages(messages = []) {
		return messages.map((message) => {
			return (
				<Segment key={message.id}>
					<h3><strong>{message.name}</strong></h3>
					{message.message}
					<ChallengeThreadReply id={message.id} />
					{ message.children ? this.renderMessages(message.children) : null }
				</Segment>
			);
		})
	}

	render () {
		return (
			<div>
				<br />
				<h3>Challenges</h3>
				<Divider />
				<Segment>
					{this.renderMessages(this.props.questions)}
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