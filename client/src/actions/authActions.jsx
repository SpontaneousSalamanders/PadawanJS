/*
 * action types
 */
import axios from 'axios';
import { browserHistory } from 'react-router';

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SET_MENTOR_PRIVILEGES = 'SET_MENTOR_PRIVILEGES';

const jwt_decode = require('jwt-decode');

// const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post('/signin', { email, password })
      .then( (response) => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        // decode token for info on the user
        let decoded_token_data = jwt_decode(response.data.token);

        // - Save the JWT token
        localStorage.setItem('token', response.data.token);


        // // - redirect to the appropriate route
        if(decoded_token_data.type === 'padawan') {
          // browserHistory.push('/padawan_profile/' + decoded_token_data.sub);

          browserHistory.push('/');
        }
        // // - set mentor flag if token indicates the user has mentor privileges
        else if (decoded_token_data.type === 'mentor') {
          dispatch({ type: SET_MENTOR_PRIVILEGES });

          // below commented won't work unless that profile has already been visited. need to think of another work around

          // browserHistory.push('/profile/' + decoded_token_data.sub);
           browserHistory.push('/');
        }

        else {
          browserHistory.push('/');
        }

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

export function activateMentorProfile(props) {
  return function(dispatch) {
  console.log('active mentor', props)
    // mentor sign up and activating mentor profile
    axios.post('/mentor_profile_activation',
      props,
      {headers: { authorization: localStorage.getItem('token') }})
      .then(response => {
        // what protected content are we pointing them to?
        dispatch({type: SET_MENTOR_PRIVILEGES});

        console.log('response is', response)

        let decoded_token_data = jwt_decode(response.data.token);

        localStorage.setItem('token', response.data.token);

        console.log('dispatch should have been called after setting token')

        browserHistory.push('/');
      })
      .catch(response => dispatch(response.data.error));
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
  browserHistory.push('/')
  return { type: UNAUTH_USER };
}
