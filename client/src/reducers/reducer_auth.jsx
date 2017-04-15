import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_STUDENT_PROFILE,
  FETCH_MENTOR_PROFILE,
  SET_MENTOR_PRIVILEGES
} from '../actions/authActions.jsx';


export default function(state = { authenticated: false, mentor_privileges: false }, action) {

  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false, mentor_privileges: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_STUDENT_PROFILE:
      return { ...state, message: action.payload };
    case FETCH_MENTOR_PROFILE:
      return { ...state, message: action.payload };
    case SET_MENTOR_PRIVILEGES:
      return { ...state, mentor_privileges: true };
  }

  return state;

}
