import axios from 'axios';

export const GET_DIRECT_MESSAGES = 'GET_DIRECT_MESSAGES';

export function getConversation (conversation_id) {
  console.log('getconvo is being called', conversation_id);
  const request = axios.get('/conversation/' + conversation_id, { headers: {
    authorization: localStorage.getItem('token') }
  })


  return {
    type: GET_DIRECT_MESSAGES,
    payload: request
  }
}