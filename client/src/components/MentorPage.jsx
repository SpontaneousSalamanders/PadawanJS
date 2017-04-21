import React, { Component } from 'react';
import ResourceBoard from '../containers/ResourceBoard.jsx';
import MentorCard from '../containers/MentorCard.jsx';
import EventBoard from '../containers/EventBoard.jsx';
import MentorPostMenu from './MentorPostMenu.jsx';
import EventForm from '../containers/EventForm.jsx';
import ResourceForm from '../containers/ResourceForm.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MentorProfileCard from '../containers/MentorProfileCard.jsx';
import ChallengeThreadList from '../containers/ChallengeThreadList.jsx';


const MentorPage = function (props) {  
  return (
    <div className="container" style={{marginTop: 150, width: '100%'}}>
      <div className="row">
        <div className="col-md-6" >
          <MentorProfileCard/>
          <MuiThemeProvider>
            <EventForm/>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <ResourceForm/>
          </MuiThemeProvider>
        </div>
        <div className="col-md-6">
          <ResourceBoard/>
          <EventBoard/>
          <ChallengeThreadList />
        </div>
      </div>
      <div>
        <div className="col-md-6">
        </div>
      </div>
    </div>
  )
}

export default MentorPage;