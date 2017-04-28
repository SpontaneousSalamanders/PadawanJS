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

      let decoded_token_data = jwt_decode(response.data.token);

      // - Save the JWT token
      localStorage.setItem('token', response.data.token);

      console.log('response is:', response.data.id)

      browserHistory.push(`/profile/${response.data.id}`)
    })
    .catch( (response) => {
      console.log(response)
      dispatch(authError(response.data.error))
    })
  }
  // return {
  //   type: POST_EVENT,
  //   payload: request
  // };

}