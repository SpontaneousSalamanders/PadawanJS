/*
 * action types
 */
import axios from 'axios';
import { browserHistory } from 'react-router';

const AUTH_USER = 'auth_user';
const UNAUTH_USER = 'unauth_user';
const AUTH_ERROR = 'auth_error';
const FETCH_MESSAGE = 'fetch_message';
const FETCH_MENTOR_MESSAGE = 'fetch_mentor_message';
const SET_MENTOR_PRIVILEGES = 'set_mentor_privileges';

const jwt_decode = require('jwt-decode');

const ROOT_URL = 'http://localhost:3000';