/*
 * action types
 */
import axios from 'axios';
import { browserHistory } from 'react-router';

export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';
export const FETCH_STUDENT_PROFILE = 'fetch_student_profile'
export const FETCH_MENTOR_PROFILE = 'fetch_mentor_profile'
export const SET_MENTOR_PRIVILEGES = 'set_mentor_privileges';

const jwt_decode = require('jwt-decode');

// const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post('/signin', { email, password })
      .then( (response) => {
        // // If request is good...
        // // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        // // decode token for info on the user
        let decoded_token_data = jwt_decode(response.data.token);


        // - Save the JWT token
        localStorage.setItem('token', response.data.token);


        // // - redirect to the appropriate route
        // if(decoded_token_data.type === 'padawan') {
        //   browserHistory.push('/padawan_profile/id=' + decoded_token_data.sub);
        // }
        // // - set mentor flag if token indicates the user has mentor privileges
        // else if(decoded_token_data.type == 'mentor') {
        //   dispatch({ type: SET_MENTOR_PRIVILEGES });
        //   browserHistory.push('/mentor_profile/id=' + + decoded_token_data.sub);
        // }
        // else {
        //   browserHistory.push('/');
        // }
        browserHistory.push('/');

      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        console.log(email, password);
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ email, password, firstName, lastName, passwordConfirm, type = 'padawan' }) {
  return function(dispatch) {
    axios.post('/signup', { email, password, firstName, lastName, passwordConfirm, type})
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);

        // send to appropriate student profile after auth

        // browserHistory.push('/student_profile/id');

        // for now, sign the guy up and send him back to homepage
        browserHistory.push('/');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}



//token included in the header of the request for authorization

export function activateMentorProfile({ email, password, type = 'mentor', role, location, techStack }) {
  return function(dispatch) {
    // mentor sign up and activating mentor profile
    axios.post('/mentor_profile_activation',
      { email, password, type, location, role, techStack },
      {headers: { authorization: localStorage.getItem('token') }})
      .then(response => {
        // mentor_profile
        browserHistory.push('/mentorprofile/');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

//token included in the header of the request for authorization
// fetch student dashboard with just student privileges
export function fetchStudentProfile() {
  return function(dispatch) {
    axios.get('/student_profile', {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_STUDENT_PROFILE,
          payload: response.data.message
        });
        console.log('r.d.m?', response.data.message)
      });
  }
}



//token included in the header of the request for authorization
// fetch mentor dashboard with mentor privileges
export function fetchMentorProfile(mentor) {
  return function(dispatch) {
    axios.get('/mentor_profile', {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MENTOR_PROFILE,
          payload: response.data.message
        });
        console.log('r.d.m?', response.data.message)
      });
  }
}
