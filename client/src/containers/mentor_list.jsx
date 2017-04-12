import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'react-materialize';
import { selectMentor } from '../actions/index.jsx'
import { bindActionCreators } from 'redux';

class MentorList extends Component {
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
                  <li>Expertise: {mentor.techStack.join(', ')}</li>
                </ul>
                <button className="viewProfileButton">View Profile</button>
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mentors: state.mentors
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectMentor: selectMentor}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorList)
