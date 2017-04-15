import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'react-materialize';
import { selectMentor } from '../actions/index.jsx'
import { bindActionCreators } from 'redux';
import MentorProfile from '../containers/MentorProfile.jsx';
import { Link } from 'react-router';
import { getMentors } from '../actions/mentorActions.jsx'

class MentorList extends Component {
  constructor(props) {
    super(props);

    this.renderCardHeader = this.renderCardHeader.bind(this);
    this.renderReveal = this.renderReveal.bind(this);
    this.renderList = this.renderList.bind(this);
  }
  
  componentDidMount() {
    this.props.getMentorsAction.getMentors();
  }

  renderCardHeader(mentor) {
    return <CardTitle reveal image={mentor.picture} waves='light'/>;
  }

  renderReveal(mentor) {
    return (
      <div>
        <ul>
          <br />
          <li>Location: {mentor.location}</li>
          <li>Expertise: {mentor.techStack.join(', ')}</li>
        </ul>
        <Link
          to={"/profile/" + mentor.id}
          onClick={()=> this.props.selectMentor(mentor)}
          className="viewProfileButton">View Profile
        </Link>
        <button className="requestLightSaberButton">Request Lightsaber</button>
      </div>
    );         
  }

  renderList() {
    return this.props.mentors.map((mentor) => {
      return (
        <div style={{marginTop: 100}} key={mentor.name}>
          <Card 
            key={mentor.name}
            header={this.renderCardHeader(mentor)}
            title={mentor.name}
            reveal={this.renderReveal(mentor)}
          />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="cardsContainer">
        {this.renderList()}
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