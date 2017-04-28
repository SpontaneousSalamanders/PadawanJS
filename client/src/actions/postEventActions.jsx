import axios from 'axios';

import { browserHistory } from 'react-router';

const jwt_decode = require('jwt-decode');

export const POST_EVENT = 'POST_EVENT';

export function postEvent(props) {
  return function(dispatch) {
  console.log('post event', props)
  axios.post('/postEvent', props, {
    headers: { authorization: localStorage.getItem('token') }
  })
    .then( (response) => {
      dispatch({ type: POST_EVENT })
      console.log('response is:', decoded_token_data)
    })
    .catch( (response) => {
      console.log(response)
    })
  }
}