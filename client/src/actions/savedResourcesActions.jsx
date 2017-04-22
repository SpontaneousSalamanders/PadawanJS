import axios from 'axios';

export const GET_SAVED_RESOURCES = 'GET_SAVED_RESOURCES';

export function getSavedResources (props) {
  const request = axios.post('/getMenteeResources/', props, {
    headers: { authorization: localStorage.getItem('token') }
  });

  return {
    type: GET_SAVED_RESOURCES,
    payload: request
  };
}
