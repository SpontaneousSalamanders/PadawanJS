import axios from 'axios';

export const GET_EVENTS = 'GET_EVENTS';

export function getEvents() {
  const request = axios.get('/getEvents');

  return {
    type: GET_EVENTS,
    payload: request
  }
}
