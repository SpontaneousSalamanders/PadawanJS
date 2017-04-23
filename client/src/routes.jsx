import React from 'react'
import { browserHistory, Route } from 'react-router'

import App from './components/App.jsx';
import LandingPage from './containers/LandingPage.jsx';
import FindMentor from './components/FindMentor.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import MentorForm from './containers/auth/MentorFormMUI.jsx';
// import MentorForm from './containers/auth/MentorForm.jsx';
import MentorPage from './components/MentorPage.jsx'
import Signout from './containers/auth/Signout.jsx'
import Dashboard from './components/Dashboard.jsx'
import RequireAuth from './containers/auth/RequireAuth.jsx';
import RequireMentor from './containers/auth/RequireMentor.jsx';
import Inbox from './containers/Inbox/Inbox.jsx';
import DirectMessage from './containers/Inbox/DirectMessage.jsx';

export default (<Route
  history={browserHistory}
  component={App}
  onChange={(prevState, nextState) => {
    if (nextState.location.action !== "POP") {
      window.scrollTo(0, 0);
    }
  }}>
  <Route path="/" component={LandingPage} />
  <Route path="/find_mentor" component={FindMentor} />
  <Route path="/signin" component={LoginPage} />
  <Route path="/signup" component={SignUpPage} />
  <Route path="/mentorform" component={MentorForm} />
  <Route path="/signout" component={Signout} />
  <Route path="/profile/:id" component={MentorPage} />
  <Route path="/dashboard" component={Dashboard} />
  <Route path="/inbox" component={Inbox} />
  <Route path="/inbox/:id" component={DirectMessage} />
  </Route>
);