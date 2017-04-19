import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'react-materialize';
import { selectMentor } from '../actions/index.jsx'
import { bindActionCreators } from 'redux';
import MentorPage from '../components/MentorPage.jsx';
import { Link } from 'react-router';
import { getMentors } from '../actions/mentorActions.jsx';
import MentorListCard from './MentorListCard.jsx';

class MentorList extends Component {
  componentDidMount() {
    this.props.getMentorsAction.getMentors();
  }

  renderList() {
    return this.props.mentors.filtered.map((mentor, index) => {
      return (
        <MentorListCard selectedMentor={this.props.selectedMentor} mentor={mentor}/>
      )
    })
  }

  render() {
    return (
      <div className='container'style={{width: '100%', marginTop: 100, marginLeft: 150}}>
        <div class="row">
            <div class="col-sm-8"></div>
            {this.renderList()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mentors: state.mentors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMentorsAction: bindActionCreators({getMentors: getMentors}, dispatch),
    selectMentorAction: bindActionCreators({selectMentor: selectMentor}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorList)