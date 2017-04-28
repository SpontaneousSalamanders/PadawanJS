import axios from 'axios';

export const GET_EVENTS = 'GET_EVENTS';

export function getEvents(user_id) {
  let request;

  if (user_id) {
    request = axios.get('/getEvents/' + user_id);
  } else {
    request = axios.get('/getMentorEvents', {
      headers: { authorization: localStorage.getItem('token') }
    });
  }

  return {
    type: GET_EVENTS,
    payload: request
  };
}
