import axios from 'axios';

export const GET_RESOURCES = 'GET_RESOURCES';

export function getResources(user_id) {
  const request = axios.get('/getResources/' + user_id);

  return {
    type: GET_RESOURCES,
    payload: request
  };
}
