import React, { Component } from 'react';
import { Link } from 'react-router';
import ResourceBoard from '../containers/ResourceBoard.jsx';
import MentorCard from '../containers/MentorCard.jsx';
import EventBoard from '../containers/EventBoard.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MentorProfileCard from '../containers/MentorProfileCard.jsx';
import ChallengeThread from '../containers/ChallengeThread.jsx';
import MentorPageMenu from './MentorPageMenu.jsx';

const MentorPage = function(props) {
  const mentor_id = props.location.pathname.slice(props.location.pathname.length - 1);
  return (
    <div className="container" style={{marginTop: 150, width: '100%'}}>
      <div className="row">
        <div className="col-md-6">
          <MentorCard mentor_id={mentor_id}/>
        </div>
        <div className="col-md-6">
          <MentorPageMenu />
        </div>
      </div>
    </div>
  )
}

export default MentorPage;