import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'react-materialize';
import { bindActionCreators } from 'redux';
import MentorProfile from '../components/MentorProfile.jsx';
import { Link } from 'react-router';

export default class MentorList extends Component {
  constructor(props) {
    super(props);

    this.renderCardHeader = this.renderCardHeader.bind(this);
    this.renderReveal = this.renderReveal.bind(this);
    this.renderList = this.renderList.bind(this);
  }
  
  componentDidMount() {
    this.props.actions.getMentors();
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
          onClick={()=> this.props.actions.selectMentor(mentor)}
          className="viewProfileButton">View Profile
        </Link>
        <button className="requestLightSaberButton">Request Lightsaber</button>
      </div>
    );         
  }

  renderList() {
    console.log(this.props)
    return this.props.mentors.map((mentor) => {
      return (
        <div style={{marginTop: 100}} key={mentor.name}>
          <Card 
            key={mentor.name}
            header={this.renderCardHeader(mentor)}
            title={mentor.name}
            reveal={this.renderReveal(mentor)}/>
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