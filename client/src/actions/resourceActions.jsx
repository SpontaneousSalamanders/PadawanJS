import axios from 'axios';

export const GET_RESOURCES = 'GET_RESOURCES';

export function getResources(user_id) {
  let request;

  if (user_id) {
    request = axios.get('/getResources/' + user_id);
  } else {
    request = axios.get('/getUserResources', {
      headers: { authorization: localStorage.getItem('token') }
    });
  }

  return {
    type: GET_RESOURCES,
    payload: request
  };
}
