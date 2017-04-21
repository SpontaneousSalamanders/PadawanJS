import axios from 'axios';

export const POST_EVENT = 'POST_EVENT';

export function postEvent(props) {
  console.log('post event', props)

  const request = axios.post('/postEvent', props, {
    headers: { authorization: localStorage.getItem('token') }
  });

  return {
    type: POST_EVENT,
    payload: request
  };
}