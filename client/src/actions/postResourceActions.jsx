import axios from 'axios';

export const POST_RESOURCE = 'POST_RESOURCE';

export function postResource(props) {
  const request = axios.post('/postResource/' + user_id, props);
  return {
    type: POST_RESOURCE,
    payload: request
  };
}