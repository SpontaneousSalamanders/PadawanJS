import axios from 'axios';

export const GET_DIRECT_MESSAGES = 'GET_DIRECT_MESSAGES';

export function getConversation (conversation_id) {
  const request = axios.get('/conversation' + conversation_id);

  return {
    type: GET_DIRECT_MESSAGES,
    payload: request
  }
}