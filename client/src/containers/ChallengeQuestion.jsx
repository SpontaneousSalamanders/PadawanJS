import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class ChallengeQuestion extends Component {
	constructor(props) {
    super(props);
    this.renderQuestion = this.renderQuestion.bind(this);
  }

  renderQuestion (){
  	return (
      <Segment>
	  		<h4>
	  			{this.props.question}
	  			<br />
	  		</h4>
  		</Segment>
  	)
  }

	render () {
		return (
			<div>
				{this.renderQuestion()}
			</div>
		)
	}
}

export default ChallengeQuestion;