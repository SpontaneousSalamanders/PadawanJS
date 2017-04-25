import axios from 'axios';

export const GET_DIRECT_MESSAGES = 'GET_DIRECT_MESSAGES';
export const MESSAGE_SENT = 'MESSAGE_SENT'
export const INPUT_TEXT = 'INPUT_TEXT'

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

export function startConversation (conversation_id) {
  const request = axios.get('/startConversation/', { headers: {
    authorization: localStorage.getItem('token') }
  })

  return {
    type: MESSAGE_SENT,
    payload: request
  }
}

export function sendMessage({user_id, conversation_id, direct_message}) {
  const request = axios.get('/directMessage/', { headers: {
    authorization: localStorage.getItem('token') }
  })

  return {
    type: MESSAGE_SENT,
    payload: request
  }
}