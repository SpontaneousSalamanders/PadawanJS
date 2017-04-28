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
		this.props.inDashboard ? this.props.getQuestionsAction.getQuestions() : this.props.getQuestionsAction.getQuestions(this.props.mentor.id);
	}

	renderMessages(messages = []) {
		return messages.length > 0 ? (
      messages.map((message) => {
  			return (
  				<Segment key={message.id}>
            <div className="media-left">
              <div
                key={message.id}
                style={{"width": 50}}
                className="thumbnail">
                <img
                  className="media-object"
                  src={message.picture}
                  key={message.id}
                  alt="..."/>
              </div>
            </div>
            <div
              key={message.id}
              className="media-body">
              <h4 className="media-heading">{message.name}</h4>
              <p key={message.id}>{message.message}</p>
            </div>
  					<ChallengeThreadReply
              id={message.id}
              name={message.name}/>
  					{ message.children ? this.renderMessages(message.children) : null }
  				</Segment>
        )
  		})
    ) : (
    <div style={{"textAlign":"center", "marginTop":20}}>
    <p style={{"color":"#BCBCBC"}}>This mentor has no challenges.</p>
    </div>
    )
	}

	render () {
		return (
			<div style={{"height":750, "overflow":"auto"}}>
        {this.renderMessages(this.props.questions)}
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