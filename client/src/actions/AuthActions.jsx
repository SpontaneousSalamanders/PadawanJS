/*
 * action types
 */
import axios from 'axios';
import { browserHistory } from 'react-router';

export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';
export const FETCH_MESSAGE = 'fetch_message';
export const FETCH_MENTOR_MESSAGE = 'fetch_mentor_message';
export const SET_MENTOR_PRIVILEGES = 'set_mentor_privileges';

const jwt_decode = require('jwt-decode');

const ROOT_URL = 'http://localhost:3000';