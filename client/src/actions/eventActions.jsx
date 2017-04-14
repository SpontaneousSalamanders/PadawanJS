import axios from 'axios';

export const GET_EVENTS = 'GET_EVENTS';

export function getEvents(user_id) {
  const request = axios.get('/getEvents/' + user_id);

  return {
    type: GET_EVENTS,
    payload: request
  }
}
