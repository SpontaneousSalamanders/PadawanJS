import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMentor } from '../actions/index.jsx';

class MentorFilter extends Component {
	render () {
		return (
			<p>hello from MentorFilter</p>
		)
	}
} 

export default MentorFilter;