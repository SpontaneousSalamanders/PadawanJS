import axios from 'axios';

export const GET_ALL_CONVERSATIONS = 'GET_ALL_CONVERSATIONS';

export function getConversations(user_id) {
  const request = axios.get('/conversations' + user_id);

  return {
    type: GET_ALL_CONVERSATIONS,
    payload: request
  }
}
