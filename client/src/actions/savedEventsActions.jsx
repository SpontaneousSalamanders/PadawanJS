import axios from 'axios';

export const GET_SAVED_EVENTS = 'GET_SAVED_EVENTS';

export function getSavedResources () {
  const request = axios.get('/getMenteeEvents', {
    headers: { authorization: localStorage.getItem('token') }
  });

  return {
    type: GET_SAVED_EVENTS,
    payload: request
  };
}
