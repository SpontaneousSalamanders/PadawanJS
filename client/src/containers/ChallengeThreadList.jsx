import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment } from 'semantic-ui-react';
import ChallengeQuestion from './ChallengeQuestion.jsx';
import EnterNewComment from './EnterNewComment.jsx';
import { bindActionCreators } from 'redux';
import { getMessages } from '../actions/messageActions.jsx';

const question = "Q. what?"

class ChallengeThreadList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			incomingComment: {}
		}
		this.handleCommentChange = this.handleCommentChange.bind(this);
		this.renderAnswerList = this.renderAnswerList.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getMessagesAction.getMessages();
	}

	handleCommentChange(event) {
		var newComment = {};
		newComment['student'] = 'test';
		newComment['answer'] = event.target.value;
		this.setState({
			incomingComment: newComment
		});
		console.log(this.state.incomingComment);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			comments: this.state.comments.push(this.state.incomingComment)
		})
	}

	renderAnswerList () {
  	return this.state.comments.map((answerEntry) => {
  		return (
  			<Segment>
	  			<div className={answerEntry.student} key={answerEntry.student}>
	  				<div>{answerEntry.student}: {answerEntry.answer}</div>
	  			</div>
  			</Segment>
  		)
  	})
  }

	render () {
		return (
			<div>
				<br />
				<h3>Challenges posted by this mentor</h3>
				<Divider />
				<Segment>
					<ChallengeQuestion question={question}/>
					<div>
						<br />
						{this.renderAnswerList()}
					</div>
					<div>
						<form>
							<input id="newComment" onChange={this.handleCommentChange}/>
							<br></br>
							<button onSubmit={this.handleSubmit} type="submit">Post</button>
						</form>
					</div>
				</Segment>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    messages: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMessagesAction: bindActionCreators({getMessages: getMessages}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeThreadList)
