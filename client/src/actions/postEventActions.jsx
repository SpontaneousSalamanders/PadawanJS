import axios from 'axios';

export const POST_EVENT = 'POST_EVENT';

export function postEvent(props, user_id) {
  console.log('post event', props)
  const request = axios.post('/postEvent/' + user_id, props);
  return {
    type: POST_EVENT,
    payload: request
  };
}