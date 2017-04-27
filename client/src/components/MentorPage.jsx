import React, { Component } from 'react';
import ResourceBoard from '../containers/ResourceBoard.jsx';
import MentorCard from '../containers/MentorCard.jsx';
import EventBoard from '../containers/EventBoard.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MentorProfileCard from '../containers/MentorProfileCard.jsx';
import ChallengeThread from '../containers/ChallengeThread.jsx';
import MentorPageMenu from './MentorPageMenu.jsx';

const MentorPage = function(props) {
  return (
    <div className="container" style={{marginTop: 150, width: '100%'}}>
      <div className="row">
        <div className="col-md-6">
          <MentorCard />
        </div>
        <div className="col-md-6">
          <MentorPageMenu />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        </div>
      </div>
    </div>
  )
}

export default MentorPage;