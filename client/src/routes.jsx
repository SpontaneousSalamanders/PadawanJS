import React from 'react'
import { Route } from 'react-router'

import App from './components/App.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import MentorProfile from './components/MentorProfile.jsx'

export default (<Route component={App}>
  <Route path='/' component={HomePage} />
  <Route path="/login" component={LoginPage} />
  <Route path="/signup" component={SignUpPage} />
  <Route path="/profile/*" component={MentorProfile} />
  </Route>
);