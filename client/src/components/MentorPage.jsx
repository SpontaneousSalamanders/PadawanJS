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
import SavedResources from '../containers/SavedResources.jsx';



// redux form v6 breaks code

// ResourceBoard />
// EventBoard />
// ResourcePost />


const MentorPage = function (props) {
  return (
    <div className="container" style={{marginTop: 150, width: '100%'}}>
      <div className="row">
        <div className="col-md-6" >
          <MentorProfileCard/>
          <MentorPostMenu />
        </div>
        <div className="col-md-6">
          <ResourceBoard/>
          <SavedResources/>
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