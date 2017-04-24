import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMentor } from '../actions/index.jsx'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getMentors } from '../actions/mentorActions.jsx';
import { Card, CardTitle } from 'react-materialize';
import MentorPage from '../components/MentorPage.jsx';
import MentorListCard from './MentorListCard.jsx';

class MentorList extends Component {
  componentDidMount() {
    this.props.getMentorsAction.getMentors();
  }

  renderList() {
    return this.props.mentors.filtered.map((mentor, index) => {
      return (
        <MentorListCard
        key={index}
        mentor={mentor}
        />
      )
    })
  }

  render() {
    return (
      <div className='container'style={{width: '100%', marginTop: 100, marginLeft: 150}}>
        <div className="row">
            <div className="col-sm-12"></div>
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