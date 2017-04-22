import axios from 'axios';

export const SAVE_RESOURCE = 'SAVE_RESOURCE';

export function saveResource(props) {
  const request = axios.post('/saveResource/', props, {
    headers: { authorization: localStorage.getItem('token') }
  });

  return {
    type: SAVE_RESOURCE,
    payload: request
  };
}
