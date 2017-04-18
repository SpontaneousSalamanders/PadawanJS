import axios from 'axios';

export const POST_RESOURCE = 'POST_RESOURCE';

export function postResource(props) {
  console.log('post resrouce', props)
  const request = axios.post('/postResource/', props);
  return {
    type: POST_RESOURCE,
    payload: request
  };
}