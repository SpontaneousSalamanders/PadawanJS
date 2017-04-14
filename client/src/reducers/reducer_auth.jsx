import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_MENTOR_MESSAGE,
  SET_MENTOR_PRIVILEGES
} from '../actions/AuthActions.jsx';


export default function(state = { authenticated: false, mentor_privileges: false }, action) {

  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false, mentor_privileges: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
    case FETCH_MENTOR_MESSAGE:
      return { ...state, message: action.payload };
    case SET_MENTOR_PRIVILEGES:
      return { ...state, mentor_privileges: true };
  }

  return state;

}
