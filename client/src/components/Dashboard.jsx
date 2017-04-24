import React, { Component } from 'react';
import MentorPostMenu from './MentorPostMenu.jsx';
import EventForm from '../containers/EventForm.jsx';
import ResourceForm from '../containers/ResourceForm.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SavedResources from '../containers/SavedResources.jsx';
import SavedEvents from '../containers/SavedEvents.jsx';
import { connect } from 'react-redux'

class Dashboard extends Component {
// const Dashboard = (props) => {

  render() {
    const postMenu = this.props.mentor_privileges ? (
      <div className="col-md-6" >
        <MentorPostMenu />
      </div>
    ) : (
      <div className="col-md-6" >
      </div>
    );

    return (
      <div className="container" style={{marginTop: 150, width: '100%'}}>
        { postMenu }
        <div className="row">
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
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    mentor_privileges: state.auth.mentor_privileges
  };
}

export default connect(mapStateToProps)(Dashboard);
// export default Dashboard;
