import React, { Component } from 'react';
import MentorPostMenu from '../components/MentorPostMenu.jsx';
import EventForm from './EventForm.jsx';
import ResourceForm from './ResourceForm.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SavedResources from './SavedResources.jsx';
import SavedEvents from './SavedEvents.jsx';
import { connect } from 'react-redux';
import MentorPageMenu from '../components/MentorPageMenu.jsx';

class Dashboard extends Component {
  render() {
    const postMenu = this.props.mentor_privileges
    if (postMenu === true) {
      return (
        <div className="container" style={{marginTop: 150, width: '100%'}}>
          <div className="row">
            <div className="col-md-6">
              <MentorPostMenu />
            </div>
            <div className="col-md-6" >
              <MentorPageMenu inDashboard={true} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <SavedResources />
            </div>
            <div className="col-md-6">
              <SavedEvents />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container" style={{marginTop: 150, width: '100%'}}>
        <div className="row">
          <div className="col-md-6">
            <SavedResources />
          </div>
          <div className="col-md-6">
            <SavedEvents />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    mentor_privileges: state.auth.mentor_privileges
  };
}

export default connect(mapStateToProps)(Dashboard);
