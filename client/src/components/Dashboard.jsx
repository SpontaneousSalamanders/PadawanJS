import React, { Component } from 'react';
import MentorPostMenu from './MentorPostMenu.jsx';
import EventForm from '../containers/EventForm.jsx';
import ResourceForm from '../containers/ResourceForm.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SavedResources from '../containers/SavedResources.jsx';
import SavedEvents from '../containers/SavedEvents.jsx';

const Dashboard = (props) => {
  return (
    <div className="container" style={{marginTop: 150, width: '100%'}}>
      <div className="row">
        <div className="col-md-6" >
          <MentorPostMenu />
        </div>
        <div className="col-md-6">
          <SavedResources/>
          <SavedEvents/>
        </div>
      </div>
      <div>
        <div className="col-md-6">
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
