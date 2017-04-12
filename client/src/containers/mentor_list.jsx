import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'react-materialize';
import { selectMentor } from '../actions/index.jsx'
import { bindActionCreators } from 'redux';
import MentorProfile from './mentor_profile.jsx';
import { Link } from 'react-router';
import { getMentors } from '../actions/mentorActions.jsx'

class MentorList extends Component {
  componentDidMount() {
    this.props.getMentorsAction.getMentors();
    // console.log(this.props);
  }

  renderTechStack(mentor) {
    var result = Object.keys(mentor).filter((tech) => {
      return mentor[tech] === true;
    }).join(', ');

    return result;
  }

  renderList() {
    return this.props.mentors.map((mentor) => {
      return (
        <Card
        key={mentor.name}
        header={<CardTitle reveal image={mentor.picture} waves='light'/>}
            title={mentor.name}
            reveal={
              <div>
                <ul>
                  <br />
                  <li>Location: {mentor.location}</li>
                  <li>Expertise: {this.renderTechStack(mentor)}</li>
                </ul>
                <Link
                  to="/profile"
                  onClick={()=> this.props.selectMentorAction.selectMentor(mentor)}
                  className="viewProfileButton">View Profile
                </Link>
                <button className="requestLightSaberButton">Request Lightsaber</button>
              </div>
            }>
        </Card>
      )
    })
  }

  render() {
    return (
      <div className="cardsContainer">
        {this.renderList()}
        }
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
    getMentorsAction: bindActionCreators({ getMentors: getMentors }, dispatch),
    selectMentorAction: bindActionCreators({selectMentor: selectMentor}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorList)
