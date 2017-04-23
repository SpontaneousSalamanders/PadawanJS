import axios from 'axios';

export const GET_SAVED_RESOURCES = 'GET_SAVED_RESOURCES';

export function getSavedResources () {
  const request = axios.get('/getMenteeResources', {
    headers: { authorization: localStorage.getItem('token') }
  });

  return {
    type: GET_SAVED_RESOURCES,
    payload: request
  };
}
