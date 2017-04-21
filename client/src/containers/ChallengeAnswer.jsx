import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class ChallengeAnswer extends Component {
	constructor(props) {
    super(props);
    this.renderAnswerList = this.renderAnswerList.bind(this);
  }


  renderAnswerList () {
  	return this.props.answerList.map((answerEntry, index) => {
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
				{this.renderAnswerList()}
			</div>
		)
	}
}

export default ChallengeAnswer;