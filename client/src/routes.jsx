import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'

import HomePage from './containers/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
// import RegisterPage from './containers/SignUpPage.jsx';
// import UserProfile from './containers/UserProfile.jsx';
// import NotFound from './components/pages/NotFound.react';
import App from './components/App.jsx';

export default <Route path='/' component={HomePage}>
    <Route path="/login" component={LoginPage} />
