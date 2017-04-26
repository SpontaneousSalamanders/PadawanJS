import React, { Component } from 'react';
import ResourceBoard from '../containers/ResourceBoard.jsx';
import MentorCard from '../containers/MentorCard.jsx';
import EventBoard from '../containers/EventBoard.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MentorProfileCard from '../containers/MentorProfileCard.jsx';
import ChallengeThread from '../containers/ChallengeThread.jsx';

const MentorPage = function(props) {
  return (
    <div className="container" style={{marginTop: 150, width: '100%'}}>
      <div className="row">
        <div className="col-md-6">
          <MentorCard />
          <ResourceBoard />
        </div>
        <div className="col-md-6">
          <EventBoard />
          <br/>
          <ChallengeThread />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ChallengeThread />
        </div>
      </div>
    </div>
  )
}

export default MentorPage;