import React, { Component } from 'react';
import ResourceBoard from '../containers/ResourceBoard.jsx';
import MentorCard from '../containers/MentorCard.jsx';
import EventBoard from '../containers/EventBoard.jsx';
import MentorPostMenu from './MentorPostMenu.jsx';
import EventForm from '../containers/EventForm.jsx';
import ResourceForm from '../containers/ResourceForm.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MentorProfileCard from '../containers/MentorProfileCard.jsx';

const MentorPage = function (props) {  
  return (
    <div className="container" style={{marginTop: 150, width: '100%'}}>
      <div className="row">
        <div className="col-md-6" >
          <MentorProfileCard/>
        </div>
        <div className="col-md-6">
          <ResourceBoard/>
          <EventBoard/>
        </div>
      </div>
      <div>
        <div className="col-md-6">
          <MentorPostMenu />
        </div>
      </div>
    </div>
  )
}

export default MentorPage;