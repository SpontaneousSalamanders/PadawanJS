import axios from 'axios';

export const POST_RESOURCE = 'POST_RESOURCE';

export function postResource(props) {
  // console.log('post resource', props)
  // console.log('localStorage', localStorage)
  const request = axios.post('/postResource/', props, {
      headers: { authorization: localStorage.getItem('token') }
    });
  return {
    type: POST_RESOURCE,
    payload: request
  };
}