import axios from 'axios';

export const POST_CHALLENGE = 'POST_CHALLENGE';

export function postChallenge(props) {
  console.log('post event', props)

  const request = axios.post('/postQuestion', props, {
    headers: { authorization: localStorage.getItem('token') }
  });

  return {
    type: POST_CHALLENGE,
    payload: request
  };
}