import axios from 'axios';

export const GET_ALL_CONVERSATIONS = 'GET_ALL_CONVERSATIONS';

export function getConversations() {
  const request = axios.get('/conversations', { headers: { authorization: localStorage.getItem('token') }
    })


  return {
    type: GET_ALL_CONVERSATIONS,
    payload: request
  }
}
