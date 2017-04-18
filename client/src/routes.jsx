import React from 'react'
import { Route } from 'react-router'

import App from './components/App.jsx';
import LandingPage from './containers/LandingPage.jsx';
import FindMentor from './components/FindMentor.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import MentorPage from './components/MentorPage.jsx';
import EventPost from './containers/EventPost.jsx';
import ResourcePost from './containers/ResourcePost.jsx';

export default (<Route component={App} >
  <Route path="/" component={LandingPage} />
  <Route path="/find_mentor" component={FindMentor} />
  <Route path="/signin" component={LoginPage} />
  <Route path="/signup" component={SignUpPage} />
  <Route path="/profile/*" component={MentorPage} />
  </Route>
);