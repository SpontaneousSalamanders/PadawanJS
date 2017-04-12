import React from 'react'
import { Route } from 'react-router'

import HomePage from './containers/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
// import UserProfile from './containers/UserProfile.jsx';
// import NotFound from './components/pages/NotFound.react';
import App from './components/App.jsx';
import MentorProfile from './containers/mentor_profile.jsx';

export default <Route component={App}>
  <Route path='/' component={HomePage} />
  <Route path="/login" component={LoginPage} />
  <Route path="/signup" component={SignUpPage} />
  <Route path="/profile" component={MentorProfile} />
  </Route>

