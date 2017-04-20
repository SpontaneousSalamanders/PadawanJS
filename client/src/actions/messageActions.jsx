import axios from 'axios';

export const GET_MESSAGES = 'GET_MESSAGES';

export function getMessages(user_id) {
  const request = axios.get('/getMessages/' + user_id);

  return {
    type: GET_MESSAGES,
    payload: request
  };
}
